# yôn Gicîdolû

A community-generated conlang dictionary system for minimalist languages that make heavy use of compound phrases.

## Features

### Search & Related Terms

Find out how other Hîsyêô speakers are saying complicated English terms. The
search also looks for related terms to try to help you find a suitable
translation fast.

### Community-Generated

Community members can add new terms, translations and votes for existing
translations and they get processed through a [Pull
Request](https://github.blog/developer-skills/github/beginners-guide-to-github-creating-a-pull-request/)
to this project's code repository.

### Four Voting Categories

Votes can be provided to indicate which is the best overall, most succinct, most
specific, and funniest translations.

### Personal Verification

To add new content, you must provide a verification method and a moderator will
personally reach out to you to verify the validity of your entries.

### Publicly Available JSON Data

No data is locked in a database. The entries and votes are exposed directly for
consumption by other services.

### HTF-INT

Due to Hîsyêô's strict orthography, a word/syllable encoding was built to reduce
translation submission size by at least 50% which increases the maximum
submission size.

### 

## Development

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### TODO

- [x] Add a guard client side that replaces a vote if the user changes to a different translation for the same category
- [x] Add a reddit username authentication
- [x] Add a synonyms library that searches for alternatives
- [x] When in a term detail page, search for any closely related words using synonyms and offer them to the user to navigate to
- [x] Show a count of how many translations have been written for the suggested alternative terms 
- [x] Add noun phrase grammar checking before submission is allowed
- [x] Allow switching between latin, abugida and syllabary Hîsyêô text
- [x] Make the main rendering view into a window that only renders html within proximity of user's scroll location (when list of terms gets big)
- [x] Add a warning toast to indicate that user's prior selection was unset
- [x] Allow the user to see newly added translations in the term detail page before they are submitted
- [x] Add a way to click on a submission queue item and navigate to that new term, new translation or voted translation
- [x] Make submitter not a field for submission entries because of the submission author
- [x] Add a ui change when the screen resolution is small: "English &rarr; Hisyeo" is removed, "X items translated" just becomes "X" and the "untranslated" label is removed ôêîû
- [x] Make "No username to validate" error only appear once
- [x] Get untranslated page working again and with grammar checking
- [x] Add a button in the header that takes you right to the PRs for the repo
- [x] Add link to submission files from translation entries in term detail pages
- [x] Make the untranslated button clickable on all screens that it's viewable on
- [x] Fix style outlines for terms that contain pending votes and entries
- [x] Fix for adaptive display of best translations (only show 2 sections if only 2 have top translations)
- [x] Show search results in order of levenstein distance from the search param
- [x] Fix for proper name HTF-INT encoding/decoding
- [x] Add a sort dropdown button on term detail to sort translations by each vote category
- [x] Allow user to add translation immediately upon adding a new term
- [x] When clicking modify, only copy the latin text up into the new translation field
- [ ] Add a new JSON file for storing user merges and when aggregate script runs, it checks names against this JSON file and replaces them when they have a merge record present

## Getting Started

First, set your github repo in `.env.local`:

```shell
NEXT_PUBLIC_GITHUB_REPO_URL=https://path.to/repo
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
