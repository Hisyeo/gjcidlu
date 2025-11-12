"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Term } from '@/lib/types';

interface TermListProps {
  initialTerms: Term[];
}

export default function TermList({ initialTerms }: TermListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTerms, setFilteredTerms] = useState(initialTerms);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = initialTerms.filter(term =>
      term.id.toLowerCase().includes(lowercasedQuery) ||
      term.description.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredTerms(filtered);
  }, [searchQuery, initialTerms]);

  return (
    <>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Search for a word or add a new one..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <Link
          href={`/new-term?name=${encodeURIComponent(searchQuery)}`}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          Submit New
        </Link>
      </div>

      <div className="mt-6 space-y-8">
        {filteredTerms.map(term => (
          <div key={term.id} className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-gray-900">{term.id.split('-')[0]}</h2>
            <p className="mb-1 font-mono text-gray-500">({term.pos.slice(0, 1)}.)</p>
            <p className="mb-4 text-gray-700 italic">{term.description}</p>
            
            <hr className="my-4 border-gray-100" />
            
            {/* This part would need real data fetching to be accurate */}
            <h3 className="mb-3 text-sm font-semibold text-gray-500 uppercase">Top Translations</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <span className="text-xs text-gray-400">Overall</span>
                <p className="text-lg font-medium text-blue-600">(No votes)</p>
              </div>
              <div>
                <span className="text-xs text-gray-400">Minimal</span>
                <p className="text-lg font-medium text-blue-600">(No votes)</p>
              </div>
            </div>

            <hr className="my-4 border-gray-100" />

            <div className="mt-6 flex items-center justify-between">
              <Link href={`/new-term?name=${encodeURIComponent(term.id.split('-')[0])}`} className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Add alternative meaning</span>
              </Link>

              <Link href={`/term/${term.id}`} className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                View Translations &rarr;
              </Link>
            </div>
          </div>
        ))}
        {filteredTerms.length === 0 && (
            <div className="text-center py-10">
                <p className="text-gray-500">No terms found matching your search.</p>
            </div>
        )}
      </div>
    </>
  );
}
