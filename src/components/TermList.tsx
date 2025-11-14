"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { TermWithDetails } from '@/lib/data';
import { useAppContext } from '@/app/AppContext';
import { useToast } from '@/app/ToastContext';
import { getPendingSubmissions, SubmissionContent, PendingSubmissionsResponse, GitHubRateLimitError } from '@/lib/github';
import { Entry } from '@/lib/types'; // Removed Term import

interface TermListProps {
  initialTerms: TermWithDetails[];
}

const PENDING_DATA_CACHE_KEY = 'pendingSubmissionsCache';

// Helper type for combined terms
interface CombinedTerm extends TermWithDetails {
  status: 'published' | 'pending';
  prUrl?: string;
  entries?: (Entry & { status?: 'published' | 'pending'; prUrl?: string })[];
}

export default function TermList({ initialTerms }: TermListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { showUntranslated } = useAppContext();
  const { showToast } = useToast();
  const [pendingSubmissions, setPendingSubmissions] = useState<SubmissionContent[]>([]);

  useEffect(() => {
    const fetchPendingData = async () => {
      const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL || '';
      let fetchedSubmissions: SubmissionContent[] = [];

      try {
        const result: PendingSubmissionsResponse = await getPendingSubmissions(repoUrl);
        fetchedSubmissions = result.submissions;
        localStorage.setItem(PENDING_DATA_CACHE_KEY, JSON.stringify(fetchedSubmissions));
      } catch (error: unknown) { // Changed type to unknown
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

      // Filter out cached items that are now published
      const publishedTermIds = new Set(initialTerms.map(t => t.id));
      const filteredSubmissions = fetchedSubmissions.map(sub => {
          sub.newTerms = sub.newTerms?.filter(t => !publishedTermIds.has(t.id));
          // A more robust implementation would also filter entries for existing terms
          return sub;
      }).filter(sub => (sub.newTerms?.length || 0) > 0 || (sub.newEntries?.length || 0) > 0);
      
      setPendingSubmissions(filteredSubmissions);
    };

    fetchPendingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allTerms = useMemo(() => {
    const pendingTermsMap = new Map<string, CombinedTerm>();
    const pendingEntriesMap = new Map<string, (Entry & { status?: 'published' | 'pending'; prUrl?: string })[]>();

    pendingSubmissions.forEach(submission => {
      submission.newTerms?.forEach(term => {
        pendingTermsMap.set(term.id, { ...term, status: 'pending', prUrl: submission.prUrl, topTranslations: { overall: null, minimal: null, specific: null, humorous: null } });
      });
      submission.newEntries?.forEach(entry => {
        const termId = entry.termId;
        if (!pendingEntriesMap.has(termId)) {
          pendingEntriesMap.set(termId, []);
        }
        pendingEntriesMap.get(termId)?.push({ ...entry, status: 'pending', prUrl: submission.prUrl });
      });
    });

    const combinedTerms: CombinedTerm[] = initialTerms.map(term => {
      const termEntries = pendingEntriesMap.get(term.id) || [];
      return {
        ...term,
        status: 'published',
        entries: termEntries, // Add pending entries to published terms
      };
    });

    // Add pending terms that are not yet published
    pendingTermsMap.forEach((pendingTerm, termId) => {
      if (!initialTerms.some(t => t.id === termId)) {
        combinedTerms.push({
          ...pendingTerm,
          entries: pendingEntriesMap.get(termId) || [],
        });
      }
    });

    return combinedTerms;
  }, [initialTerms, pendingSubmissions]);

  const filteredTerms = useMemo(() => {
    if (!allTerms) return [];
    const lowercasedQuery = searchQuery.toLowerCase();
    return allTerms.filter(term =>
      term.id.toLowerCase().includes(lowercasedQuery) ||
      term.description.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchQuery, allTerms]);

  const renderTopTranslations = (topTranslations: TermWithDetails['topTranslations']) => {
    if (!topTranslations) return <p className="text-lg font-medium text-gray-500">(No votes on published entries)</p>;
    const votedCategories = (Object.keys(topTranslations) as (keyof typeof topTranslations)[])
      .filter(cat => topTranslations[cat] !== null)
      .map(cat => ({ category: cat, translation: topTranslations[cat]! }));

    if (votedCategories.length === 0) {
      return <p className="text-lg font-medium text-gray-500">(No votes on published entries)</p>;
    }

    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <div>
          <span className="text-xs text-gray-400">Overall</span>
          <p className="text-lg font-medium text-blue-600">{topTranslations.overall || '(No votes)'}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400">Minimal</span>
          <p className="text-lg font-medium text-blue-600">{topTranslations.minimal || '(No votes)'}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400">Specific</span>
          <p className="text-lg font-medium text-blue-600">{topTranslations.specific || '(No votes)'}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400">Humorous</span>
          <p className="text-lg font-medium text-blue-600">{topTranslations.humorous || '(No votes)'}</p>
        </div>
      </div>
    );
  };

  if (showUntranslated) {
    return <div>Untranslated view not yet updated for pending data.</div>;
  }

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
        {filteredTerms.map(term => {
          const isPendingTerm = term.status === 'pending';
          const hasPendingEntries = term.entries?.some(e => e.status === 'pending');

          return (
            <div key={term.id} className={`rounded-lg border bg-white ${isPendingTerm ? 'border-yellow-400' : 'border-gray-200'}`}>
              {isPendingTerm && (
                <div className="p-2 bg-yellow-100 text-yellow-800 text-sm rounded-t-lg flex justify-between items-center">
                  <span>This term is pending review.</span>
                  {term.prUrl && <a href={term.prUrl} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">View PR</a>}
                </div>
              )}
              {hasPendingEntries && !isPendingTerm && (
                <div className="p-2 bg-blue-100 text-blue-800 text-sm rounded-t-lg">
                  This term has pending translations.
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{term.id.split('-')[0]}</h2>
                <p className="mb-1 font-mono text-gray-500">({term.pos.slice(0, 1)}.)</p>
                <p className="mb-4 text-gray-700 italic">{term.description}</p>
                
                {!isPendingTerm && (
                  <>
                    <hr className="my-4 border-gray-100" />
                    <h3 className="mb-3 text-sm font-semibold text-gray-500 uppercase">Top Translations</h3>
                    {renderTopTranslations(term.topTranslations)}
                  </>
                )}

                <hr className="my-4 border-gray-100" />

                <div className="mt-6 flex items-center justify-between">
                  <Link href={`/new-term?name=${encodeURIComponent(term.id.split('-')[0])}`} className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Add alternative meaning</span>
                  </Link>

                  {isPendingTerm ? (
                    <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed" title="Detail page not available for pending terms">
                      View Translations &rarr;
                    </span>
                  ) : (
                    <Link href={`/term/${term.id}`} className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                      View Translations &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {filteredTerms.length === 0 && (
            <div className="text-center py-10">
                <p className="text-gray-500">No terms found matching your search.</p>
            </div>
        )}
      </div>
    </>
  );
}