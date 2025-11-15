"use client";

import { useState, useEffect, useMemo } from 'react';
import { encode, decode, encodeToSnakeCaseSyllabary } from '@/lib/htf-int';
import { Entry, Term, Vote, VoteType, QueueAction } from '@/lib/types';
import { addToQueue, getQueue, removeFromQueue } from '@/lib/queue';
import { useToast } from '@/app/ToastContext';
import { useSettings } from '@/app/SettingsContext';
import { getPendingSubmissions, SubmissionContent, PendingSubmissionsResponse, GitHubRateLimitError } from '@/lib/github';

const PENDING_DATA_CACHE_KEY = 'pendingSubmissionsCache';

interface TermDetailClientViewProps {
  term: Term;
  initialEntries: { id: string; termId: string; votes: Record<VoteType, number>; contents: number[], submitter?: string }[];
}

interface DisplayEntry extends Entry {
    status: 'published' | 'pending-pr' | 'pending-queue';
    prUrl?: string;
    votes: Record<VoteType, number>;
    isCurrentUserSubmitter: boolean;
}

export default function TermDetailClientView({ term, initialEntries }: TermDetailClientViewProps) {
  const [translation, setTranslation] = useState('');
  const [queue, setQueue] = useState<QueueAction[]>([]);
  const { showToast } = useToast();
  const { settings } = useSettings();
  const [pendingEntries, setPendingEntries] = useState<(Entry & { prUrl?: string })[]>([]);
  const [isDuplicateInput, setIsDuplicateInput] = useState(false);
  const [userVotes, setUserVotes] = useState<Record<VoteType, { entryId: string, date: string } | null>>({ overall: null, minimal: null, specific: null, humorous: null });

  useEffect(() => {
    const updateQueue = () => setQueue(getQueue());
    updateQueue();
    window.addEventListener('storage', updateQueue);
    return () => window.removeEventListener('storage', updateQueue);
  }, []);

  useEffect(() => {
    const fetchPendingData = async () => {
      const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL || '';
      let fetchedSubmissions: SubmissionContent[] = [];

      try {
        const result: PendingSubmissionsResponse = await getPendingSubmissions(repoUrl);
        fetchedSubmissions = result.submissions;
        localStorage.setItem(PENDING_DATA_CACHE_KEY, JSON.stringify(fetchedSubmissions));
      } catch (error: unknown) {
        console.error("Error fetching pending submissions:", error);
        if (typeof error === 'object' && error !== null && 'isRateLimitError' in error && (error as GitHubRateLimitError).isRateLimitError) {
          showToast('GitHub API rate limit exceeded. Using cached pending data.', 'error');
        } else {
          showToast('Failed to fetch pending data. Using cached data if available.', 'error');
        }

        try {
          const cachedData = localStorage.getItem(PENDING_DATA_CACHE_KEY);
          if (cachedData) {
            fetchedSubmissions = JSON.parse(cachedData);
          }
        } catch (cacheError) {
          console.error("Failed to read from localStorage:", cacheError);
        }
      }

      const entriesForThisTerm = fetchedSubmissions
        .flatMap(sub => sub.newEntries?.map(e => ({ ...e, prUrl: sub.prUrl })) || [])
        .filter(entry => entry.termId === term.id);
      
      setPendingEntries(entriesForThisTerm);
    };

    fetchPendingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term.id]);

  useEffect(() => {
    const fetchUserVotes = async () => {
      if (!settings.userId || !settings.userSystem) return;
      
      try {
        const response = await fetch('/votes.json');
        const allVotesData = await response.json();
        const termVotes = allVotesData[term.id];
        if (termVotes) {
          const currentUserIdentifier = `${settings.userSystem.toLowerCase()}:${settings.userId}`;
          const userVoteHistory = termVotes[currentUserIdentifier];
          if (userVoteHistory) {
            const latestVotes: Record<VoteType, { entryId: string, date: string } | null> = { overall: null, minimal: null, specific: null, humorous: null };
            for (const voteType in userVoteHistory) {
              const votes = userVoteHistory[voteType as VoteType];
              if (votes && votes.length > 0) {
                const latestVote = votes[votes.length - 1];
                latestVotes[voteType as VoteType] = { entryId: latestVote.entry, date: latestVote.voted };
              }
            }
            setUserVotes(latestVotes);
          }
        }
      } catch (error) {
        console.error("Failed to fetch or parse votes.json", error);
      }
    };
    fetchUserVotes();
  }, [settings, term.id]);

  const allEntries: DisplayEntry[] = useMemo(() => {
    const currentUserIdentifier = settings.userSystem && settings.userId ? `${settings.userSystem.toLowerCase()}:${settings.userId}` : null;

    const published = initialEntries.map(e => ({ ...e, status: 'published' as const, prUrl: undefined, isCurrentUserSubmitter: e.submitter === currentUserIdentifier }));
    const pendingFromPrs = pendingEntries.map(e => ({ ...e, status: 'pending-pr' as const, votes: { overall: 0, minimal: 0, specific: 0, humorous: 0 }, isCurrentUserSubmitter: e.submitter === currentUserIdentifier }));
    
    const pendingFromQueue = queue
      .filter((action): action is { type: 'NEW_ENTRY'; payload: Entry; id: string } => action.type === 'NEW_ENTRY' && action.payload.termId === term.id)
      .map(action => ({ ...action.payload, status: 'pending-queue' as const, votes: { overall: 0, minimal: 0, specific: 0, humorous: 0 }, isCurrentUserSubmitter: true }));

    const combined = [...published, ...pendingFromPrs, ...pendingFromQueue];
    const uniqueEntries = Array.from(new Map(combined.map(entry => [entry.id, entry])).values());
    return uniqueEntries;
  }, [initialEntries, pendingEntries, queue, term.id, settings]);

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!translation.trim()) return;

    const newTranslationContents = encode(translation);
    const newEntryId = encodeToSnakeCaseSyllabary(newTranslationContents);

    const isDuplicateInAllEntries = allEntries.some(entry => entry.id === newEntryId);
    const isDuplicateInQueue = queue.some(action => 
      action.type === 'NEW_ENTRY' && 
      action.payload.termId === term.id && 
      action.payload.id === newEntryId
    );

    if (isDuplicateInAllEntries || isDuplicateInQueue) {
      showToast('This translation already exists or is pending review.', 'error');
      setIsDuplicateInput(true);
      return;
    }

    addToQueue({
      type: 'NEW_ENTRY',
      payload: { id: newEntryId, termId: term.id, contents: newTranslationContents }
    });

    setTranslation('');
    setIsDuplicateInput(false);
    showToast('Translation added to queue!', 'success');
  };

  const handleModify = (contents: number[]) => {
    setTranslation(decode(contents));
    setIsDuplicateInput(false);
  };

  const handleTranslationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTranslation(e.target.value);
    setIsDuplicateInput(false);
  };

  const handleVote = (entryId: string, voteType: VoteType) => {
    const existingPublishedVote = userVotes[voteType];
    if (existingPublishedVote && existingPublishedVote.entryId === entryId) {
      showToast('This vote has already been submitted.', 'error');
      return;
    }

    const existingVoteInQueue = queue.find(
      (action): action is { type: 'VOTE'; payload: Vote; id:string } =>
        action.type === 'VOTE' &&
        action.payload.termId === term.id &&
        action.payload.voteType === voteType
    );

    if (existingVoteInQueue) {
      removeFromQueue(existingVoteInQueue.id);
      if (existingVoteInQueue.payload.entryId === entryId) {
        return;
      }
    }

    if (existingPublishedVote && existingPublishedVote.entryId !== entryId) {
      const confirmation = window.confirm(`Are you sure you want to change your '${voteType}' vote?`);
      if (!confirmation) {
        return;
      }
    }

    addToQueue({
      type: 'VOTE',
      payload: { termId: term.id, entryId: entryId, voteType: voteType }
    });

    const entry = allEntries.find(e => e.id === entryId);
    const translationText = entry ? decode(entry.contents) : entryId;
    showToast(`Vote for '${voteType}' on entry '${translationText}' added to queue!`, 'success');
  };

  const getVoteCount = (entryId: string, voteType: VoteType) => {
    const initialCount = allEntries.find(e => e.id === entryId)?.votes[voteType] ?? 0;
    const queueCount = queue.filter(
      action =>
        action.type === 'VOTE' &&
        action.payload.entryId === entryId &&
        action.payload.voteType === voteType
    ).length;
    return initialCount + queueCount;
  };

  const isVotedInQueue = (entryId: string, voteType: VoteType) => {
    return queue.some(
      action =>
        action.type === 'VOTE' &&
        action.payload.termId === term.id &&
        action.payload.voteType === voteType &&
        action.payload.entryId === entryId
    );
  };

  return (
    <>
      <div className="mt-6">
        <form onSubmit={handleAddEntry}>
          <input
            type="text"
            value={translation}
            onChange={handleTranslationChange}
            placeholder="Add your Hîsyêô translation..."
            className={`w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none ${isDuplicateInput ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
          />
          <button type="submit" className="mt-2 w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
            Add to Submission Queue
          </button>
        </form>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold">All Translations ({allEntries.length})</h3>

          {allEntries.map(entry => {
            const isPendingPr = entry.status === 'pending-pr';
            const isPendingQueue = entry.status === 'pending-queue';
            const isPending = isPendingPr || isPendingQueue;
            const isCurrentUserSubmitter = entry.isCurrentUserSubmitter;

            return (
              <div key={entry.id} className={`rounded-lg border bg-white ${isPending ? 'border-yellow-400' : 'border-gray-200'}`}>
                {isPending && (
                  <div className="p-2 bg-yellow-100 text-yellow-800 text-sm rounded-t-lg flex justify-between items-center">
                    <span>
                      {isPendingPr ? 'This translation is pending review.' : 'This translation is in your submission queue.'}
                    </span>
                    {isPendingPr && entry.prUrl && <a href={entry.prUrl} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">View PR</a>}
                  </div>
                )}
                {isCurrentUserSubmitter && !isPending && (
                    <div className="p-2 bg-green-100 text-green-800 text-sm rounded-t-lg">
                        You submitted this translation.
                    </div>
                )}
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-2xl font-medium text-gray-900">{decode(entry.contents)}</p>
                    <button onClick={() => handleModify(entry.contents)} className="flex items-center space-x-1 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span>Modify</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(['overall', 'minimal', 'specific', 'humorous'] as VoteType[]).map(voteType => {
                      const isVotedInQueueByUser = isVotedInQueue(entry.id, voteType);
                      const userVote = userVotes[voteType];
                      const isVotedByCurrentUser = userVote?.entryId === entry.id;
                      
                      let buttonClass = 'border border-gray-400 px-3 py-1 text-sm rounded-md';
                      if (isVotedInQueueByUser) {
                        buttonClass = 'bg-yellow-400 text-black px-3 py-1 text-sm rounded-md';
                      } else if (isVotedByCurrentUser) {
                        buttonClass = 'bg-blue-500 text-white px-3 py-1 text-sm rounded-md';
                      }
                      
                      const title = isVotedByCurrentUser ? `You voted for this on ${new Date(userVote.date).toLocaleDateString()}` : '';

                      return (
                        <button key={voteType} onClick={() => handleVote(entry.id, voteType)} className={buttonClass} disabled={isPending} title={title}>
                          {voteType.charAt(0).toUpperCase() + voteType.slice(1)} ({getVoteCount(entry.id, voteType)})
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}