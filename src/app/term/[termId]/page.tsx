import { getTermById, getEntriesForTerm, getAggregatedVotesForTerm, getTerms } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import TermDetailClientView from './client-page';
import entriesData from '../../../../public/entries.json';
import { EntriesData } from '@/lib/types';

// Generate static pages for all terms at build time
export function generateStaticParams() {
  const entries: EntriesData = entriesData;
  if (!entries) return [];
  
  return Object.keys(entries).map(termId => ({
    termId: termId,
  }));
}

// --- Page Component (Server) ---
export default async function TermDetailPage({ params }: { params: { termId: string } }) {
  const resolvedParams = await params;
  const term = getTermById(await resolvedParams.termId);

  if (!term) {
    notFound();
  }

  const allTerms = getTerms();
  const entries = getEntriesForTerm(term.id);
  const votes = getAggregatedVotesForTerm(term.id);

  const initialEntries = entries.map(entry => {
    const entryVotes = votes[entry.id] || { overall: 0, minimal: 0, specific: 0, humorous: 0 };
    return {
      id: entry.id,
      termId: entry.termId,
      contents: entry.contents,
      votes: entryVotes,
      sourceFile: entry.sourceFile,
      status: 'published' as const, // Always published on this page
    };
  });

  return (
    <main className="container mx-auto mt-8 p-4">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-4 block text-sm text-blue-600 hover:underline">
          &larr; Back to all terms
        </Link>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-3xl font-bold text-gray-900">{term.id.split('-')[0]}</h2>
          <p className="mb-2 font-mono text-lg text-gray-500">({term.pos.slice(0,1)}.)</p>
          <p className="text-lg text-gray-700 italic">&quot;{term.description}&quot;</p>
        </div>

        <TermDetailClientView term={term} initialEntries={initialEntries} allTerms={allTerms} />
      </div>
    </main>
  );
}