"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import { TermWithDetails } from '@/lib/data';
import { useAppContext } from '@/app/AppContext';
import { useSettings } from '@/app/SettingsContext';
import { useToast } from '@/app/ToastContext';
import { getPendingSubmissions, SubmissionContent, PendingSubmissionsResponse, GitHubRateLimitError } from '@/lib/github';
import { Entry, QueueAction } from '@/lib/types';
import { getQueue } from '@/lib/queue';
import { levenshtein } from '@/lib/utils';
import synonyms from 'synonyms';
import UntranslatedTerms from './UntranslatedTerms';
import { decode } from '@/lib/htf-int';

interface TermListProps {
  initialTerms: TermWithDetails[];
}

const PENDING_DATA_CACHE_KEY = 'pendingSubmissionsCache';

interface CombinedTerm extends TermWithDetails {
  status: 'published' | 'pending';
  prUrl?: string;
  entries?: (Entry & { status?: 'published' | 'pending'; prUrl?: string })[];
  isCurrentUserSubmitter?: boolean;
}

export default function TermList({ initialTerms }: TermListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);
  const { showUntranslated } = useAppContext();
  const { settings } = useSettings();
  const { showToast } = useToast();
  const [pendingSubmissions, setPendingSubmissions] = useState<SubmissionContent[]>([]);
  const [queue, setQueue] = useState<QueueAction[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const updateQueue = () => setQueue(getQueue());
    updateQueue();
    window.addEventListener('storage', updateQueue);
    return () => window.removeEventListener('storage', updateQueue);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisibleCount(prev => prev + 10);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    const fetchPendingData = async () => {
      setPendingSubmissions([]); // Clear pending submissions before fetching
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

      const publishedTermIds = new Set(initialTerms.map(t => t.id));
      const filteredSubmissions = fetchedSubmissions.reduce((acc, sub) => {
        const unpublishedNewTerms = sub.newTerms?.filter(t => !publishedTermIds.has(t.id));
        const unpublishedNewEntries = sub.newEntries?.filter(e => !publishedTermIds.has(e.termId));

        if (unpublishedNewTerms?.length || unpublishedNewEntries?.length) {
          acc.push({ ...sub, newTerms: unpublishedNewTerms, newEntries: unpublishedNewEntries });
        }
        return acc;
      }, [] as SubmissionContent[]);
      
      setPendingSubmissions(filteredSubmissions);
    };

    fetchPendingData();
  }, [initialTerms, showToast]);

  const allTerms = useMemo(() => {
    const currentUserIdentifier = settings.userSystem && settings.userId ? `${settings.userSystem.toLowerCase()}:${settings.userId}` : null;
    const pendingTermsMap = new Map<string, CombinedTerm>();
    const pendingEntriesMap = new Map<string, (Entry & { status?: 'published' | 'pending'; prUrl?: string })[]>();

    pendingSubmissions.forEach(submission => {
      const submissionAuthorIdentifier = submission.author ? `${submission.author.system.toLowerCase()}:${submission.author.id}` : null;
      const isCurrentUserSubmitter = submissionAuthorIdentifier === currentUserIdentifier;
      submission.newTerms?.forEach(term => {
        pendingTermsMap.set(term.id, { ...term, status: 'pending', prUrl: submission.prUrl, topTranslations: { overall: null, minimal: null, specific: null, humorous: null }, isCurrentUserSubmitter, latestEntryDate: new Date().toISOString() });
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
        entries: termEntries,
      };
    });

    pendingTermsMap.forEach((pendingTerm, termId) => {
      if (!initialTerms.some(t => t.id === termId)) {
        combinedTerms.push({
          ...pendingTerm,
          entries: pendingEntriesMap.get(termId) || [],
        });
      }
    });

    return combinedTerms;
  }, [initialTerms, pendingSubmissions, settings]);

  const relatedTerms = useMemo(() => {
    if (debouncedQuery) {
      const related = synonyms(debouncedQuery);
      const relatedWords = [...(related?.n || []), ...(related?.v || []), ...(related?.adj || []), ...(related?.adv || [])];
      const relatedWithTranslations = allTerms
        .filter(t => relatedWords.includes(t.id.split('-')[0]))
        .map(t => ({ term: t.id.split('-')[0], count: allTerms.filter(term => term.id.startsWith(t.id.split('-')[0] + '-')).length }))
        .filter(r => r.count > 0);

      const uniqueRelatedTerms = Array.from(new Map(relatedWithTranslations.map(item => [item.term, item])).values());

      return uniqueRelatedTerms;
    }
    return [];
  }, [debouncedQuery, allTerms]);

  const filteredTerms = useMemo(() => {
    if (!allTerms) return [];
    const lowercasedQuery = debouncedQuery.toLowerCase();
    if (!lowercasedQuery) {
        return allTerms;
    }

    const relatedWords = [...(synonyms(lowercasedQuery)?.n || []), ...(synonyms(lowercasedQuery)?.v || []), ...(synonyms(lowercasedQuery)?.adj || []), ...(synonyms(lowercasedQuery)?.adv || [])];

    const filtered = allTerms.filter(term =>
      term.id.toLowerCase().includes(lowercasedQuery) ||
      term.description.toLowerCase().includes(lowercasedQuery) ||
      relatedWords.some(word => term.id.toLowerCase().includes(word))
    );

    return filtered.sort((a, b) => {
      const termA = a.id.split('-')[0];
      const termB = b.id.split('-')[0];
      const distA = levenshtein(termA, lowercasedQuery);
      const distB = levenshtein(termB, lowercasedQuery);
      return distA - distB;
    });
  }, [debouncedQuery, allTerms]);

  const visibleTerms = useMemo(() => {
    return filteredTerms.slice(0, visibleCount);
  }, [filteredTerms, visibleCount]);

  const renderTopTranslations = (topTranslations: TermWithDetails['topTranslations']) => {
    if (!topTranslations) return <p className="text-lg font-medium text-gray-500">(No votes on published entries)</p>;
    
    const translationFontClass = isMounted && settings.script === 'abugida' ? 'font-abugida' : isMounted && settings.script === 'syllabary' ? 'font-syllabary' : '';

    const votedCategories = (Object.keys(topTranslations) as (keyof typeof topTranslations)[])
      .filter(cat => topTranslations[cat] !== null)
      .map(cat => ({ category: cat, translation: topTranslations[cat]! }));

    if (votedCategories.length === 0) {
      return <p className="text-lg font-medium text-gray-500">(No votes on published entries)</p>;
    }

    if (votedCategories.length === 1) {
      const { category, translation } = votedCategories[0];
      return (
        <div>
          <span className="text-xs text-gray-400">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          <p className={`text-lg font-medium text-blue-600 ${translationFontClass}`}>{decode(translation, isMounted ? settings.script : 'latin')}</p>
        </div>
      );
    }

    if (votedCategories.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-x-4">
          {votedCategories.map(({ category, translation }) => (
            <div key={category}>
              <span className="text-xs text-gray-400">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              <p className={`text-lg font-medium text-blue-600 ${translationFontClass}`}>{decode(translation, isMounted ? settings.script : 'latin')}</p>
            </div>
          ))}
        </div>
      );
    }

    // For 3 or 4 categories, use the 2x2 grid
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <div>
          <span className="text-xs text-gray-400">Overall</span>
          <p className={`text-lg font-medium text-blue-600 ${topTranslations.overall ? translationFontClass : ''}`}>{topTranslations.overall ? decode(topTranslations.overall, isMounted ? settings.script : 'latin') : '(No votes)'}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400">Minimal</span>
          <p className={`text-lg font-medium text-blue-600 ${topTranslations.minimal ? translationFontClass : ''}`}>{topTranslations.minimal ? decode(topTranslations.minimal, isMounted ? settings.script : 'latin') : '(No votes)'}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400">Specific</span>
          <p className={`text-lg font-medium text-blue-600 ${topTranslations.specific ? translationFontClass : ''}`}>{topTranslations.specific ? decode(topTranslations.specific, isMounted ? settings.script : 'latin') : '(No votes)'}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400">Humorous</span>
          <p className={`text-lg font-medium text-blue-600 ${topTranslations.humorous ? translationFontClass : ''}`}>{topTranslations.humorous ? decode(topTranslations.humorous, isMounted ? settings.script : 'latin') : '(No votes)'}</p>
        </div>
      </div>
    );
  };

  if (showUntranslated) {
    return <UntranslatedTerms terms={allTerms} />;
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

      {relatedTerms.filter(r => r.term != searchQuery).length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Related search terms: {relatedTerms.filter(r => r.term != searchQuery).map(r => `'${r.term}' (${r.count} translations)`).join(', ')}
        </div>
      )}

      <div className="mt-6 space-y-8">
        {visibleTerms.map((term, index) => {
          const isLastElement = index === visibleTerms.length - 1;
          const isPendingTerm = term.status === 'pending';
          const hasPendingEntries = term.entries?.some(e => e.status === 'pending');
          const isCurrentUserSubmitter = term.isCurrentUserSubmitter;

          const hasPendingVoteInQueue = queue.some(action => action.type === 'VOTE' && action.payload.termId === term.id);
          const hasPendingEntryInQueue = queue.some(action => action.type === 'NEW_ENTRY' && action.payload.termId === term.id);

          let outlineClass = 'border-gray-200';
          if (hasPendingEntryInQueue && hasPendingVoteInQueue) {
            outlineClass = 'border-purple-400';
          } else if (hasPendingEntryInQueue) {
            outlineClass = 'border-green-400';
          } else if (hasPendingVoteInQueue) {
            outlineClass = 'border-blue-400';
          }

          if (isPendingTerm) {
            outlineClass = 'border-yellow-400';
          }

          return (
            <div key={term.id} ref={isLastElement ? lastElementRef : null} className={`rounded-lg border bg-white ${outlineClass}`}>
              {isPendingTerm && !isCurrentUserSubmitter && (
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
              {isCurrentUserSubmitter && isPendingTerm && (
                <div className="p-2 bg-green-100 text-green-800 text-sm rounded-t-lg">
                  You submitted this term.
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
        {filteredTerms.length === 0 && debouncedQuery && (
            <div className="text-center py-10">
                <p className="text-gray-500">No terms found matching your search.</p>
            </div>
        )}
      </div>
    </>
  );
}