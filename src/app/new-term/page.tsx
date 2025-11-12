"use client";

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { addToQueue } from '@/lib/queue';
import { Term } from '@/lib/types';

function NewTermForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTermName = searchParams.get('name') || '';

  const [termName, setTermName] = useState(initialTermName);
  const [pos, setPos] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termName || !pos || !description) {
      alert('Please fill out all fields.');
      return;
    }

    const termId = `${termName.toLowerCase().replace(/\s+/g, '-')}-${Math.random().toString(36).substring(2, 7)}`;

    const newTerm: Term = {
      id: termId,
      pos,
      description,
    };

    addToQueue({ type: 'NEW_TERM', payload: newTerm });
    router.push('/');
  };

  return (
    <main className="container mx-auto mt-8 p-4">
      <div className="mx-auto max-w-xl">
        <Link href="/" className="mb-4 block text-sm text-blue-600 hover:underline">
          &larr; Back to all terms
        </Link>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-2xl font-semibold">Add a New Term Meaning</h2>
          <p className="mt-1 text-gray-500">This will create a new, distinct entry. (e.g., "Bank" as a noun "a financial institution" vs. "Bank" as a noun "a river side").</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="term-name" className="block text-sm font-medium text-gray-700"> Term </label>
              <input
                type="text"
                id="term-name"
                value={termName}
                onChange={(e) => setTermName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="pos" className="block text-sm font-medium text-gray-700"> Part of Speech </label>
              <select
                id="pos"
                value={pos}
                onChange={(e) => setPos(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              >
                <option value="">-- Select --</option>
                <option value="noun">Noun (n.)</option>
                <option value="adjective">Adjective (adj.)</option>
                <option value="verb">Verb (v.)</option>
                <option value="adverb">Adverb (adv.)</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700"> Brief English Description </label>
              <textarea
                id="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., 'Lasting for a very short time.'"
                className="mt-1 w-full rounded-lg border border-gray-300 p-2"
              ></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">Add to Submission Queue</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function NewTermPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NewTermForm />
        </Suspense>
    )
}
