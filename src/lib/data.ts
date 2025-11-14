import { Term, VoteType, EntriesData, Entry } from './types';
import entriesData from '../../rsc/published/entries.json';
import votesData from '../../rsc/published/votes.json';
import { decode } from './htf-int';
import { getPendingSubmissions } from './github';

// --- Type definitions to match the JSON structure ---
interface VotesData {
    [termId: string]: {
        [userId: string]: {
            [voteType in VoteType]?: { entry: string; voted?: string; date?: string }[];
        }
    }
}

export type VoteCounts = Record<VoteType, number>;
export type AggregatedVotes = Record<string, VoteCounts>; // Record<entryId, VoteCounts>

export interface DetailedEntry extends Entry {
    status: 'published' | 'pending'; // Make it required here
    prUrl?: string;
}

export interface DetailedTerm extends Term {
    status: 'published' | 'pending'; // Make it required here
}

export interface TermWithDetails extends DetailedTerm {
    topTranslations: Record<VoteType, string | null>;
    entries: DetailedEntry[];
}

// --- Cast the imported data to our defined types ---
const entries: EntriesData = entriesData;
const votes: VotesData = votesData;

// --- Synchronous Data Access Functions for Published Data ---

export function getPublishedTerms(): Term[] {
  if (!entries) return [];
  
  return Object.keys(entries).map(termId => ({
    id: termId,
    pos: entries[termId].$pos || '',
    description: entries[termId].$desc || '',
  }));
}

export function getTermById(termId: string): Term | null {
    const allTerms = getPublishedTerms();
    return allTerms.find(term => term.id === termId) || null;
}

export function getEntriesForTerm(termId: string): Entry[] {
    if (!entries || !entries[termId]) return [];

    const termData = entries[termId];
    return Object.keys(termData)
        .filter(key => !key.startsWith('$'))
        .map(entryId => {
            const entry = termData[entryId];
            if (typeof entry !== 'string' && 'contents' in entry) {
                return {
                    id: entryId,
                    termId: termId,
                    contents: entry.contents || [],
                    submitter: entry.submitter,
                    created: entry.created,
                };
            }
            // This case should ideally not happen with valid data
            return { id: entryId, termId: termId, contents: [] };
        });
}

export function getAggregatedVotesForTerm(termId: string): AggregatedVotes {
    const aggregatedVotes: AggregatedVotes = {};
    if (!votes || !votes[termId]) return aggregatedVotes;

    const termVotes = votes[termId];
    for (const userId in termVotes) {
        const userVotes = termVotes[userId];
        for (const voteType in userVotes) {
            const userVoteArray = userVotes[voteType as VoteType];
            if (userVoteArray && userVoteArray.length > 0) {
                const latestVote = userVoteArray[userVoteArray.length - 1];
                const entryId = latestVote.entry;

                if (!aggregatedVotes[entryId]) {
                    aggregatedVotes[entryId] = { overall: 0, minimal: 0, specific: 0, humorous: 0 };
                }
                aggregatedVotes[entryId][voteType as VoteType]++;
            }
        }
    }
    return aggregatedVotes;
}

// --- New Asynchronous Function to Get All Data (Published + Pending) ---

export async function getTermsWithDetails(): Promise<TermWithDetails[]> {
    const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL || '';
    console.log(`[data.ts] Fetching pending submissions from repo: ${repoUrl}`);

    const publishedTerms: DetailedTerm[] = getPublishedTerms().map(t => ({...t, status: 'published' as const}));
    const pendingSubmissions = await getPendingSubmissions(repoUrl);
    console.log(`[data.ts] Found ${pendingSubmissions.length} pending submissions.`);
    
    const pendingTerms: DetailedTerm[] = [];
    const pendingEntries: DetailedEntry[] = [];

    pendingSubmissions.forEach(submission => {
        submission.newTerms?.forEach(term => {
            pendingTerms.push({ ...term, status: 'pending', prUrl: submission.prUrl } as DetailedTerm);
        });
        submission.newEntries?.forEach(entry => {
            pendingEntries.push({ ...entry, status: 'pending', prUrl: submission.prUrl } as DetailedEntry);
        });
    });
    console.log(`[data.ts] Parsed ${pendingTerms.length} pending terms and ${pendingEntries.length} pending entries.`);

    const allTerms = [...publishedTerms, ...pendingTerms];
    const uniqueTerms = allTerms.filter((term, index, self) =>
        index === self.findIndex((t) => t.id === term.id)
    );

    const detailedTerms = uniqueTerms.map(term => {
        const publishedEntriesForTerm: DetailedEntry[] = getEntriesForTerm(term.id).map(e => ({ ...e, status: 'published' as const }));
        const pendingEntriesForTerm: DetailedEntry[] = pendingEntries.filter(e => e.termId === term.id);
        
        const allEntriesForTerm: DetailedEntry[] = [...publishedEntriesForTerm, ...pendingEntriesForTerm];

        const aggregatedVotes = getAggregatedVotesForTerm(term.id);
        const topTranslations: Record<VoteType, string | null> = {
            overall: null, minimal: null, specific: null, humorous: null,
        };

        const voteTypes: VoteType[] = ['overall', 'minimal', 'specific', 'humorous'];
        for (const type of voteTypes) {
            let maxVotes = 0;
            let winnerId: string | null = null;

            for (const entryId in aggregatedVotes) {
                const count = aggregatedVotes[entryId][type];
                if (count > maxVotes) {
                    maxVotes = count;
                    winnerId = entryId;
                }
            }
            
            if (winnerId) {
                const winningEntry = publishedEntriesForTerm.find(e => e.id === winnerId);
                if (winningEntry && winningEntry.contents) {
                    topTranslations[type] = decode(winningEntry.contents);
                }
            }
        }

        return {
            ...term,
            topTranslations,
            entries: allEntriesForTerm,
        };
    });

    if (pendingTerms.length > 0) {
        console.log('[data.ts] Sample pending term:', JSON.stringify(detailedTerms.find(t => t.status === 'pending'), null, 2));
    }

    return detailedTerms;
}

export function getTranslationStats() {
    const allTerms = getPublishedTerms();
    const totalTerms = allTerms.length;
    let translatedCount = 0;

    for (const term of allTerms) {
        const entries = getEntriesForTerm(term.id);
        if (entries.length > 0) {
            translatedCount++;
        }
    }

    return {
        totalTerms,
        translatedCount,
        untranslatedCount: totalTerms - translatedCount,
    };
}