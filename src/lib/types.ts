export interface Term {
  id: string; // e.g., "ephemeral-628"
  pos: string; // part of speech
  description: string;
}

export interface Entry {
  id: string; // base64f of contents
  termId: string;
  submitter: string;
  created: string; // ISO 8601 date
  contents: number[]; // HTF-INT
  original?: string; // if modifying
}

export type VoteType = "overall" | "minimal" | "specific" | "humorous";

export interface Vote {
  termId: string;
  entryId: string;
  voteType: VoteType;
  user: string; // In a real app, this would come from auth
  voted: string; // ISO 8601 date
}

// Actions that can be in the submission queue
export type QueueAction =
  | { type: "NEW_TERM"; payload: Term; id: string }
  | { type: "NEW_ENTRY"; payload: Entry; id: string }
  | { type: "VOTE"; payload: Vote; id:string };
