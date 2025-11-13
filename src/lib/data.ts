import { Term, VoteType } from './types';
import entriesData from '../../rsc/published/entries.json';
import votesData from '../../rsc/published/votes.json';
import { decode } from './htf-int'; // Import the decoder

// --- Type definitions to match the JSON structure ---
interface EntriesData {
  [termId: string]: {
    $pos: string;
    $desc: string;
    [entryId: string]: any;
  }
}

interface VotesData {
    [termId: string]: {
        [userId: string]: {
            [voteType in VoteType]?: { entry: string; voted?: string; date?: string }[];
        }
    }
}

export type VoteCounts = Record<VoteType, number>;
export type AggregatedVotes = Record<string, VoteCounts>; // Record<entryId, VoteCounts>

export interface TermWithDetails extends Term {
    topTranslations: Record<VoteType, string | null>;
}

// --- Cast the imported data to our defined types ---
const entries: EntriesData = entriesData;
const votes: VotesData = votesData;

// --- Synchronous Data Access Functions ---

export function getTerms(): Term[] {
  if (!entries) return [];
  
  return Object.keys(entries).map(termId => ({
    id: termId,
    pos: entries[termId].$pos || '',
    description: entries[termId].$desc || '',
  }));
}

export function getTermById(termId: string): Term | null {
    const allTerms = getTerms();
    return allTerms.find(term => term.id === termId) || null;
}

export function getEntriesForTerm(termId: string): { id: string, contents: number[] }[] {
    if (!entries || !entries[termId]) return [];

    const termData = entries[termId];
    return Object.keys(termData)
        .filter(key => !key.startsWith('$'))
        .map(entryId => ({ 
            id: entryId, 
            contents: termData[entryId].contents || [] 
        }));
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

export function getTermsWithDetails(): TermWithDetails[] {
    const allTerms = getTerms();

    const detailedTerms = allTerms.map(term => {
        const aggregatedVotes = getAggregatedVotesForTerm(term.id);
        const entriesForTerm = getEntriesForTerm(term.id);

        const topTranslations: Record<VoteType, string | null> = {
            overall: null,
            minimal: null,
            specific: null,
            humorous: null,
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
                const winningEntry = entriesForTerm.find(e => e.id === winnerId);
                if (winningEntry && winningEntry.contents) {
                    topTranslations[type] = decode(winningEntry.contents);
                }
            } else {
                topTranslations[type] = null;
            }
        }

        return {
            ...term,
            topTranslations,
        };
    });

    return detailedTerms;
}

export function getTranslationStats() {
    const allTerms = getTerms();
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
