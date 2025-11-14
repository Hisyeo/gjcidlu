"use client";

import { useState, useEffect } from 'react';
import { encode, decode, encodeToSnakeCaseSyllabary } from '@/lib/htf-int';
import { Entry, Term, Vote, VoteType, QueueAction } from '@/lib/types';
import { addToQueue, getQueue, removeFromQueue } from '@/lib/queue';
import { useToast } from '@/app/ToastContext';

interface EntryWithStatus extends Entry {
  status?: 'published' | 'pending';
  prUrl?: string;
  votes: Record<VoteType, number>;
}

interface TermDetailClientViewProps {
  term: Term;
  initialEntries: EntryWithStatus[];
}

export default function TermDetailClientView({ term, initialEntries }: TermDetailClientViewProps) {
  const [translation, setTranslation] = useState('');
  const [queue, setQueue] = useState<QueueAction[]>([]);
  const { showToast } = useToast();

  useEffect(() => {
    const updateQueue = () => setQueue(getQueue());
    updateQueue();
    window.addEventListener('storage', updateQueue);
    return () => window.removeEventListener('storage', updateQueue);
  }, []);

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!translation.trim()) return;

    const newTranslationContents = encode(translation);
    const newEntryId = encodeToSnakeCaseSyllabary(newTranslationContents);

    const isDuplicate = initialEntries.some(entry => entry.id === newEntryId) ||
                        queue.some(action => action.type === 'NEW_ENTRY' && action.payload.id === newEntryId);

    if (isDuplicate) {
      showToast('This translation has already been submitted.', 'error');
      return;
    }

    addToQueue({
      type: 'NEW_ENTRY',
      payload: { id: newEntryId, termId: term.id, contents: newTranslationContents }
    });

    setTranslation('');
    showToast('Translation added to queue!', 'success');
  };

  const handleVote = (entryId: string, voteType: VoteType) => {
    const existingVote = queue.find(
      (action): action is { type: 'VOTE'; payload: Vote; id: string } =>
        action.type === 'VOTE' &&
        action.payload.termId === term.id &&
        action.payload.voteType === voteType
    );

    if (existingVote) {
      removeFromQueue(existingVote.id);
    }

    addToQueue({
      type: 'VOTE',
      payload: { termId: term.id, entryId: entryId, voteType: voteType }
    });

    const entry = initialEntries.find(e => e.id === entryId);
    const translationText = entry ? decode(entry.contents) : entryId;
    showToast(`Vote for '${voteType}' on entry '${translationText}' added to queue!`, 'success');
  };

  const getVoteCount = (entryId: string, voteType: VoteType) => {
    const initialCount = initialEntries.find(e => e.id === entryId)?.votes[voteType] ?? 0;
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
            onChange={(e) => setTranslation(e.target.value)}
            placeholder="Add your Hîsyêô translation..."
            className="w-full rounded-lg border border-gray-300 p-3"
          />
          <button type="submit" className="mt-2 w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
            Add to Submission Queue
          </button>
        </form>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold">All Translations ({initialEntries.length})</h3>

          {initialEntries.map(entry => {
            const isPending = entry.status === 'pending';
            return (
              <div key={entry.id} className={`rounded-lg border bg-white ${isPending ? 'border-yellow-400' : 'border-gray-200'}`}>
                {isPending && (
                  <div className="p-2 bg-yellow-100 text-yellow-800 text-sm rounded-t-lg flex justify-between items-center">
                    <span>This translation is pending review.</span>
                    {entry.prUrl && <a href={entry.prUrl} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">View PR</a>}
                  </div>
                )}
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-2xl font-medium text-gray-900">{decode(entry.contents)}</p>
                    <button className="flex items-center space-x-1 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span>Modify</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(['overall', 'minimal', 'specific', 'humorous'] as VoteType[]).map(voteType => {
                      const isVoted = isVotedInQueue(entry.id, voteType);
                      const buttonClass = isVoted
                        ? 'bg-blue-500 text-white px-3 py-1 text-sm rounded-md'
                        : 'border border-gray-400 px-3 py-1 text-sm rounded-md';
                      
                      return (
                        <button key={voteType} onClick={() => handleVote(entry.id, voteType)} className={buttonClass} disabled={isPending}>
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
