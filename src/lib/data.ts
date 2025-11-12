import path from 'path';
import fs from 'fs/promises';
import { Term, VoteType } from './types';

interface EntriesData {
  [termId: string]: {
    $pos: string;
    $desc:string;
    [entryId: string]: any;
  }
}

interface VotesData {
    [termId: string]: {
        [userId: string]: {
            [voteType in VoteType]?: { entry: string; voted: string }[];
        }
    }
}

export type VoteCounts = Record<VoteType, number>;
export type AggregatedVotes = Record<string, VoteCounts>; // Record<entryId, VoteCounts>

async function readJsonFile(filePath: string) {
    try {
        const jsonContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(jsonContent);
    } catch (error) {
        console.error(`Failed to read or parse ${path.basename(filePath)}:`, error);
        return null;
    }
}

export async function getTerms(): Promise<Term[]> {
  const data: EntriesData | null = await readJsonFile(path.join(process.cwd(), 'rsc', 'published', 'entries.json'));
  if (!data) return [];
  
  return Object.keys(data).map(termId => ({
    id: termId,
    pos: data[termId].$pos || '', // Default to empty string if missing
    description: data[termId].$desc || '', // Default to empty string if missing
  }));
}

export async function getTermById(termId: string): Promise<Term | null> {
    const terms = await getTerms();
    return terms.find(term => term.id === termId) || null;
}

export async function getEntriesForTerm(termId: string): Promise<{ id: string }[]> {
    const data: EntriesData | null = await readJsonFile(path.join(process.cwd(), 'rsc', 'published', 'entries.json'));
    if (!data || !data[termId]) return [];

    const termData = data[termId];
    return Object.keys(termData)
        .filter(key => !key.startsWith('$'))
        .map(entryId => ({ id: entryId, ...termData[entryId] }));
}

export async function getAggregatedVotesForTerm(termId: string): Promise<AggregatedVotes> {
    const data: VotesData | null = await readJsonFile(path.join(process.cwd(), 'rsc', 'published', 'votes.json'));
    const aggregatedVotes: AggregatedVotes = {};

    if (!data || !data[termId]) return aggregatedVotes;

    const termVotes = data[termId];
    for (const userId in termVotes) {
        const userVotes = termVotes[userId];
        for (const voteType in userVotes) {
            const votes = userVotes[voteType as VoteType];
            if (votes && votes.length > 0) {
                // The last vote in the array is the most recent one
                const latestVote = votes[votes.length - 1];
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
