"use client";

import { useState } from 'react';
import { addToQueue } from '@/lib/queue';
import { Entry, Term, Vote, VoteType } from '@/lib/types';

interface TermDetailClientViewProps {
  term: Term;
  initialEntries: { id: string; votes: Record<VoteType, number> }[];
}

export default function TermDetailClientView({ term, initialEntries }: TermDetailClientViewProps) {
  const [translation, setTranslation] = useState('');
  // Local state to give immediate feedback on votes
  const [entries, setEntries] = useState(initialEntries);

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!translation.trim()) return;

    const mockContents = translation.split('').map(char => char.charCodeAt(0));
    const mockEntryId = btoa(String(mockContents)).slice(0, 20).replace(/[^a-zA-Z0-9]/g, '');

    const newEntry: Omit<Entry, 'submitter' | 'created'> = {
      id: mockEntryId,
      termId: term.id,
      contents: mockContents,
    };

    addToQueue({
      type: 'NEW_ENTRY',
      payload: { ...newEntry, submitter: 'test-user', created: new Date().toISOString() }
    });

    setTranslation('');
    alert('Translation added to queue!');
  };

  const handleVote = (entryId: string, voteType: VoteType) => {
    const vote: Omit<Vote, 'user' | 'voted'> = {
      termId: term.id,
      entryId: entryId,
      voteType: voteType,
    };

    addToQueue({
      type: 'VOTE',
      payload: { ...vote, user: 'test-user', voted: new Date().toISOString() }
    });

    // Give immediate UI feedback
    setEntries(currentEntries =>
      currentEntries.map(entry =>
        entry.id === entryId
          ? { ...entry, votes: { ...entry.votes, [voteType]: entry.votes[voteType] + 1 } }
          : entry
      )
    );
    alert(`Vote for '${voteType}' on entry '${entryId}' added to queue!`);
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
          <h3 className="text-xl font-semibold">All Translations ({entries.length})</h3>

          {entries.map(entry => (
            <div key={entry.id} className="rounded-lg border bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-2xl font-medium text-gray-900">{entry.id}</p>
                <button className="flex items-center space-x-1 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Modify</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => handleVote(entry.id, 'overall')} className="border border-blue-500 px-3 py-1 text-sm rounded-md">Overall ({entry.votes.overall})</button>
                <button onClick={() => handleVote(entry.id, 'minimal')} className="border border-gray-400 px-3 py-1 text-sm rounded-md">Minimal ({entry.votes.minimal})</button>
                <button onClick={() => handleVote(entry.id, 'specific')} className="border border-gray-400 px-3 py-1 text-sm rounded-md">Specific ({entry.votes.specific})</button>
                <button onClick={() => handleVote(entry.id, 'humorous')} className="border border-gray-400 px-3 py-1 text-sm rounded-md">Humorous ({entry.votes.humorous})</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
