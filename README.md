This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## TODO

- [x] Add a guard client side that replaces a vote if the user changes to a different translation for the same category
- [x] Add a reddit username authentication
- [ ] Add a hunspell library that suggests the alternatives that hunspell offers (during main page search and during add new term)
- [ ] When in a term detail page, search for any closely related words using hunspell and offer them to the user to navigate to
- [ ] Show a count of how many translations have been written for the suggested alternative terms 
- [ ] Add noun phrase grammar and spell checking before submission is allowed
- [ ] Make the main rendering view into a window that only renders html within proximity of user's scroll location (when list of terms gets big)
- [ ] Add a warning toast to indicate that user's prior selection was unset
- [x] Allow the user to see newly added translations in the term detail page before they are submitted
- [ ] Add a way to click on a submission queue item and navigate to that new term, new translation or voted translation
- [ ] Make the untranslated button clickable on all screens that it's viewable on
- [x] Make submitter not a field for submission entries because of the submission author
- [ ] Add a ui change when the screen resolution is small: "English &rarr; Hisyeo" is removed, "X items translated" just becomes "X" and the "untranslated" label is removed

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
