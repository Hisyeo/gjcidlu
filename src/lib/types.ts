export interface Term {
  id: string; // e.g., "ephemeral-628"
  pos: string; // part of speech
  description: string;
}

export interface Entry {
  id: string; // snake_case_syllabary of contents
  termId: string;
  submitter?: string;
  created?: string; // ISO 8601 date
  contents: number[]; // HTF-INT
  original?: string; // if modifying
}

export type VoteType = "overall" | "minimal" | "specific" | "humorous";

export interface Vote {
  termId: string;
  entryId: string;
  voteType: VoteType;
  user?: string; // Made optional for client-side queue
  voted?: string; // Made optional for client-side queue
}

export interface EntryContent {
  submitter: string;
  created: string;
  contents: number[];
  original?: string;
}

export interface TermEntries {
  $pos: string;
  $desc: string;
  [key: string]: EntryContent | string; // Index signature for other properties
}

export interface EntriesData {
  [termId: string]: TermEntries;
}

export type UserSystem = 'Email' | 'Discord' | 'Reddit';

// Actions that can be in the submission queue
export type QueueAction =
  | { type: "NEW_TERM"; payload: Term; id: string }
  | { type: "NEW_ENTRY"; payload: Entry; id: string }
  | { type: "VOTE"; payload: Vote; id:string };