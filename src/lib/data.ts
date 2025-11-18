import { Term, VoteType, EntriesData, Entry, QueueAction } from './types';
import entriesData from '../../public/entries.json';
import votesData from '../../public/votes.json';

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

export interface TermWithDetails extends Term {
    topTranslations: Record<VoteType, number[] | null>;
    latestEntryDate: string; // For sorting
    totalTranslationsCount: number; // Add this new property
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

export function getEntriesForTerm(termId: string): Entry[] {
    if (!entries || !entries[termId]) return [];

    const termData = entries[termId];
    return Object.keys(termData)
        .filter(key => !key.startsWith('$'))
        .reduce<Entry[]>((acc, entryId) => {
            const entry = termData[entryId];
            if (typeof entry !== 'string' && 'contents' in entry && 'created' in entry) {
                acc.push({
                    id: entryId,
                    termId: termId,
                    contents: entry.contents || [],
                    submitter: entry.submitter,
                    created: entry.created,
                    sourceFile: entry.sourceFile,
                });
            }
            return acc;
        }, []);
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
        const totalTranslationsCount = entriesForTerm.length; // Calculate total translations

        let latestEntryDate = '1970-01-01T00:00:00.000Z';
        if (entriesForTerm.length > 0) {
            latestEntryDate = entriesForTerm.reduce((latest, entry) => {
                if (entry.created && entry.created > latest) {
                    return entry.created;
                }
                return latest;
            }, entriesForTerm[0].created || latestEntryDate);
        }

        const topTranslations: Record<VoteType, number[] | null> = {
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
                    topTranslations[type] = winningEntry.contents;
                }
            }
        }

        return {
            ...term,
            topTranslations,
            latestEntryDate,
            totalTranslationsCount, // Add to the returned object
        };
    });

    return detailedTerms;
}

export function getTermsWithDetailsSortedByDate(): TermWithDetails[] {
    const detailedTerms = getTermsWithDetails();
    return detailedTerms.sort((a, b) => new Date(b.latestEntryDate).getTime() - new Date(a.latestEntryDate).getTime());
}

export function getTranslationStats(queue: QueueAction[] = []) {
    const publishedTerms = getTerms();
    const newTermsInQueue = queue
        .filter((action): action is { type: 'NEW_TERM'; payload: Term; id: string } => action.type === 'NEW_TERM')
        .map(action => action.payload);

    const allTerms = [...publishedTerms, ...newTermsInQueue];
    const uniqueTerms = Array.from(new Map(allTerms.map(item => [item.id, item])).values());
    const totalTerms = uniqueTerms.length;

    const newEntriesInQueue = queue
        .filter((action): action is { type: 'NEW_ENTRY'; payload: Entry; id: string } => action.type === 'NEW_ENTRY')
        .map(action => action.payload);

    let translatedCount = 0;
    for (const term of uniqueTerms) {
        const hasPublishedEntry = getEntriesForTerm(term.id).length > 0;
        const hasQueuedEntry = newEntriesInQueue.some(entry => entry.termId === term.id);
        if (hasPublishedEntry || hasQueuedEntry) {
            translatedCount++;
        }
    }

    return {
        totalTerms,
        translatedCount,
        untranslatedCount: totalTerms - translatedCount,
    };
}