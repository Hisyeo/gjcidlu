# yôn Gicîdolû

A git-forged local-first tool for tracking conlang compound phrases by user
entry and voting.

## Purpose

If you have a conlang that has few words and relies on heavy use of compounds,
this tool can allow your community members to participate in providing new
compounds and voting on previously added ones.

## Site Layout

### Main Dictionary Layout (Adding to "Queue")
This is the main view. The key element is the "Submission Queue" icon in the header, which acts as the "shopping cart." It has a badge that updates as the user adds new entries or votes.

```HTML
<body class="bg-gray-50 text-gray-800">
  <header class="border-b border-gray-200 bg-white">
    <nav class="container mx-auto flex items-center justify-between px-4 py-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">yôn Gicîdolû</h1>
        <span class="text-sm text-gray-500">Native Languages &rarr; Hîsyêô</span>
      </div>

      <button class="relative rounded-full p-2 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>

        <span class="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"> 3 </span>
      </button>
    </nav>
  </header>

  <main class="container mx-auto mt-8 p-4">
    <div class="mx-auto max-w-2xl">
      <div class="flex space-x-2">
        <input type="text" placeholder="Search for a word or add a new one..." class="flex-grow rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />

        <button class="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Submit New</button>
      </div>

      <div class="mt-6 space-y-8">
        <div class="rounded-lg border border-gray-200 bg-white p-6">
          <h2 class="text-2xl font-semibold text-gray-900">Document</h2>
          <p class="mb-1 font-mono text-gray-500">(v.)</p>
          <p class="mb-4 text-gray-700 italic">to write about something, film it, or take photographs of it, in order to record information about it</p>

          <hr class="my-4 border-gray-100" />

          <h3 class="mb-3 text-sm font-semibold text-gray-500 uppercase">Top Translations</h3>
          <div class="grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <span class="text-xs text-gray-400">Overall</span>
              <p class="text-lg font-medium text-blue-600">xe sobis bi cukto</p>
            </div>
            <div>
              <span class="text-xs text-gray-400">Minimal</span>
              <p class="text-lg font-medium text-blue-600">sobis</p>
            </div>
            <div>
              <span class="text-xs text-gray-400">Specific</span>
              <p class="text-lg font-medium text-blue-600">xe cukto hôn uyo til sobis</p>
            </div>
            <div>
              <span class="text-xs text-gray-400">Humorous</span>
              <p class="text-lg font-medium text-blue-600">(No votes)</p>
            </div>
          </div>

          <hr class="my-4 border-gray-100" />

          <div class="mt-6 flex items-center justify-between">
            <button class="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Add alternative meaning</span>
            </button>

            <a href="#" class="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"> View all 12 translations &rarr; </a>
          </div>
        </div>

        <div class="rounded-lg border border-gray-200 bg-white p-6">
          <h2 class="text-2xl font-semibold text-gray-900">Document</h2>
          <p class="mb-1 font-mono text-gray-500">(n.)</p>
          <p class="mb-4 text-gray-700 italic">a piece of paper that has official information on it</p>

          <hr class="my-4 border-gray-100" />

          <h3 class="mb-3 text-sm font-semibold text-gray-500 uppercase">Top Translations</h3>
          <div class="grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <span class="text-xs text-gray-400">Overall</span>
              <p class="text-lg font-medium text-blue-600">cukto</p>
            </div>
            <div>
              <span class="text-xs text-gray-400">Minimal</span>
              <p class="text-lg font-medium text-blue-600">cukto</p>
            </div>
            <div>
              <span class="text-xs text-gray-400">Specific</span>
              <p class="text-lg font-medium text-blue-600">cukto centik</p>
            </div>
            <div>
              <span class="text-xs text-gray-400">Humorous</span>
              <p class="text-lg font-medium text-blue-600">(No votes)</p>
            </div>
          </div>

          <hr class="my-4 border-gray-100" />

          <div class="mt-6 flex items-center justify-between">
            <button class="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Add alternative meaning</span>
            </button>

            <a href="#" class="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"> Add a translation &rarr; </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>
```

### New Term Page
This is the new page a user sees when they click "Submit New Term" or "Add
alternative meaning."

```HTML
<body class="bg-gray-50 text-gray-800">
  <header class="border-b border-gray-200 bg-white"></header>

  <main class="container mx-auto mt-8 p-4">
    <div class="mx-auto max-w-xl">
      <a href="#" class="mb-4 block text-sm text-blue-600 hover:underline"> &larr; Back to all terms </a>

      <div class="rounded-lg border border-gray-200 bg-white p-6">
        <h2 class="text-2xl font-semibold">Add a New Term Meaning</h2>
        <p class="mt-1 text-gray-500">This will create a new, distinct entry. (e.g., "Bank" as a noun "a financial institution" vs. "Bank" as a noun "a river side").</p>

        <form class="mt-6 space-y-4">
          <div>
            <label for="term-name" class="block text-sm font-medium text-gray-700"> Term </label>
            <input type="text" id="term-name" value="Ephemeral" class="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label for="pos" class="block text-sm font-medium text-gray-700"> Part of Speech </label>
            <select id="pos" class="... mt-1 w-full rounded-lg border border-gray-300 bg-white p-2">
              <option>-- Select --</option>
              <option>Noun (n.)</option>
              <option selected>Adjective (adj.)</option>
              <option>Verb (v.)</option>
              <option>Adverb (adv.)</option>
            </select>
          </div>

          <div>
            <label for="description" class="block text-sm font-medium text-gray-700"> Brief English Description </label>
            <textarea id="description" rows="3" placeholder="e.g., 'Lasting for a very short time.'" class="... mt-1 w-full rounded-lg border border-gray-300 p-2"></textarea>
          </div>

          <div class="pt-4">
            <button type="submit" class="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">Add to Submission Queue</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</body>
```

### Term Detail Page
This is the new page you land on after clicking "View All Translations." It lists all submitted translations and shows the vote counts and buttons for all four categories. It also contains a modify button that takes the text of an already processed translation and begins the entry of a new translation, if you want to just make a small adjustment to one that's already entered.

```HTML
<body class="bg-gray-50 text-gray-800">
  <header class="border-b border-gray-200 bg-white"></header>

  <main class="container mx-auto mt-8 p-4">
    <div class="mx-auto max-w-2xl">
      <a href="#" class="mb-4 block text-sm text-blue-600 hover:underline"> &larr; Back to all terms </a>

      <div class="rounded-lg border border-gray-200 bg-white p-6">
        <h2 class="text-3xl font-bold text-gray-900">Ephemeral</h2>
        <p class="mb-2 font-mono text-lg text-gray-500">(adj.)</p>
        <p class="text-lg text-gray-700 italic">"Lasting for a very short time."</p>
      </div>

      <div class="mt-6">
        <input type="text" placeholder="Add your German translation..." class="... w-full rounded-lg border border-gray-300 p-3" />
        <button class="mt-2 w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">Add to Submission Queue</button>
      </div>

      <div class="mx-auto max-w-2xl">
        <div class="mt-8 space-y-4">
          <h3 class="text-xl font-semibold">All Translations (12)</h3>

          <div class="rounded-lg border bg-white p-4">
            <div class="mb-3 flex items-center justify-between">
              <p class="text-2xl font-medium text-gray-900">êfun</p>

              <button class="flex items-center space-x-1 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Modify</span>
              </button>
            </div>

            <div class="flex flex-wrap gap-2">
              <button class="... border border-blue-500 px-3 py-1 text-sm">Overall (27)</button>
              <button class="... border border-gray-400 px-3 py-1 text-sm">Minimal (8)</button>
              <button class="... border border-gray-400 px-3 py-1 text-sm">Specific (14)</button>
              <button class="... border border-gray-400 px-3 py-1 text-sm">Humorous (0)</button>
            </div>
          </div>

          <div class="rounded-lg border bg-white p-4">
            <div class="mb-3 flex items-center justify-between">
              <p class="text-2xl font-medium text-gray-900">mîoû</p>
              <button class="flex items-center space-x-1 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Modify</span>
              </button>
            </div>

            <div class="flex flex-wrap gap-2">
              <button class="... border border-blue-500 px-3 py-1 text-sm">Overall (0)</button>
              <button class="... border border-gray-400 px-3 py-1 text-sm">Minimal (0)</button>
              <button class="... border border-gray-400 px-3 py-1 text-sm">Specific (0)</button>
              <button class="... border border-gray-400 px-3 py-1 text-sm">Humorous (0)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>
```

### Submission Queue (The Cart)
When the user clicks the "Queue" icon, this slide-out panel appears from the
right. It lists all pending contributions (new terms, translations, votes) just
like a shopping cart lists products.

```HTML
<div class="fixed inset-y-0 right-0 w-full max-w-md bg-white 
            shadow-xl border-l border-gray-200 z-50">
  
  <div class="h-full flex flex-col">
    
    <div class="p-6 border-b border-gray-200">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-semibold">Submission Queue (3)</h2>
        <button class="p-2 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p class="text-gray-500 mt-1">
        Review your contributions before submitting.
      </p>
    </div>

    <div class="flex-grow p-6 space-y-4 overflow-y-auto">
      
      <div class="flex items-start space-x-4 p-4 border rounded-lg">
        <div class="flex-shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 
                    rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">New Term: "Sonder"</h3>
          <p class="text-sm text-gray-600">(n.) "The realization that..."</p>
        </div>
        <button class="ml-auto text-gray-400 hover:text-red-500">&times;</button>
      </div>

      <div class="flex items-start space-x-4 p-4 border rounded-lg">
        <div class="flex-shrink-0 w-10 h-10 bg-green-100 text-green-700 
                    rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m4 10h.01M11 11h.01M13 11h.01M16 11h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">New Translation: "cukto centik"</h3>
          <p class="text-sm text-gray-600">For: "Document" (n.)</summary>
        </div>
        <button class="ml-auto text-gray-400 hover:text-red-500">&times;</button>
      </div>
      
      <div class="flex items-start space-x-4 p-4 border rounded-lg">
        <div class="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 
                    rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 19.5V11m0 0l-2.5-2.5a.5.5 0 010-.707l2.5-2.5a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .707l-2.5 2.5z" />
          </svg>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">Overall vote for "êfun"</h3>
          <p class="text-sm text-gray-600">Term: "Ephemeral" (adj.)</summary>
        </div>
        <button class="ml-auto text-gray-400 hover:text-red-500">&times;</button>
      </div>
      
    </div>

    <div class="p-6 border-t border-gray-200 bg-gray-50">
      <button class="w-full px-6 py-4 bg-blue-600 text-white 
                     rounded-lg text-lg font-medium 
                     hover:bg-blue-700">
        Review & Submit All (3)
      </button>
    </div>
    
  </div>
</div>
```

### The "Checkout" Modal (Payment Processing)
When the user clicks "Review & Submit," this modal appears. This is the
"checkout" step. The final "Confirm" button is what triggers the "payment
processing" metaphor wherein the PR is generated in GitHub.

```HTML
<div class="fixed inset-0 z-50 flex items-center justify-center 
            bg-gray-800 bg-opacity-75">
  
  <div class="bg-white rounded-lg shadow-xl w-full max-w-lg">
    
    <div class="p-6 border-b border-gray-200">
      <h2 class="text-2xl font-semibold">Confirm Your Contributions</h2>
      <p class="text-gray-500 mt-1">
        Your contributions will be sent to moderation.
      </p>
    </div>

    <div class="p-6 space-y-3">
      
      <div class="flex justify-between">
        <span class="text-gray-600">New Terms:</span>
        <span class="font-medium">1</span>
      </div>
      
      <div class="flex justify-between">
        <span class="text-gray-600">New Translations:</span>
        <span class="font-medium">2</span>
      </div>

      <div class="flex justify-between">
        <span class="text-gray-600">Translation Votes:</span>
        <span class="font-medium">2</span>
      </div>
      
      <div class="flex justify-between pt-3 border-t mt-3">
        <span class="text-lg font-semibold">Total Contributions:</span>
        <span class="text-lg font-semibold">5</span>
      </div>
    </div>

    <div class="p-6 bg-gray-50 rounded-b-lg">
      <div class="flex justify-end space-x-3">
        <button class="px-5 py-2 text-gray-700 bg-white border ...">
          Cancel
        </button>
        <button class="px-5 py-2 bg-blue-600 text-white ...">
          Submit Contributions
        </button>
      </div>
    </div>

  </div>
</div>
```

### The "Processing" State
This isn't a new layout, but a state change for the "Submit Contributions"
button in Sketch 3. This directly mimics a "payment processing" button.

```HTML
<button class="px-5 py-2 bg-blue-600 text-white rounded-lg 
               font-medium flex items-center justify-center 
               disabled:opacity-70 cursor-not-allowed" 
        disabled>
  
  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" 
            stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
  
  Processing...
</button>
```

This flow directly maps your metaphor:

1. Browsing = Reading the dictionary.

2. Add to "cart" = Voting or submitting a new word.
   
3. Cart = The "Submission Queue" panel.

4. Checkout = The "Confirm Your Submissions" modal.

5. Payment Processing = The "Processing..." button state and PR redirect.


## Architecture

The site is first and foremost a static site. It can be run locally or via
gh-pages or other static site hosting tools. Whether you run locally or hosted,
you must specify a git forge repository URL which contains the project for usage
during the Pull Request portion of the workflow.

### Libraries

- Tailwind
- A Static Site Generator that you know well and that works with Tailwind

### Concepts

- **Terms** \
  These are the English words or phrases that the users are searching for or
  entering for new transations. Adding a new term doesn't necessarily require
  that you also add an **entry** for this term.
- Compound Phrases (known as **Entries**) \
  These are sets of words in the constructed language Hîsyêô that represent a
  **term** in English. Users enter them in into the app for others to vote on.
- Best Phrase Votes (known as **Votes**) \
  These are indications by a user that they feel that a given **compound
  phrase** best represents the way to speak or type a given term in Hîsyêô.
  There are four kinds of best votes:
  1. Best Overall
  2. Best Minimal
  3. Best Specific
  4. Best Humorous
- **Submissions** \
  These are the files that the client-side JS generates and submits via PR and
  they contain votes and entries

### Files

#### entries.json
```json
{
  "ephemeral-628": { // term "-" id
    "$pos": "adjective", // $ precedes all non-iterables
    "$desc": "Lasting for a very short time",
    "2C0-L2149_21412": { // base64f of contents
    // (using only contents restricts duplicate entries)
      "submitter": "user-415", // SCM PR author
      "created": "2022-10-31T09:00:00.594Z",
      "contents": [1, // htf encoding
                   123, 412, 41] // htf-int (see below)
    },
    "20K212-412_212VCD123": {
        "submitter": "user-415",
        "created": "2023-08-23T08:12:38.413Z",
        "original": "entry-467", // if modifying
        "contents": [1, 123, 412, 41, 53] 
    }
  },
  "banana-143": {} // a newly added term without any entries
}
```

#### votes.json
```json
{
    "ephemeral-628":  {
        "user-415": { // any user change overwrites
            "overall": [
                { // previous vote
                    "entry": "2C0-L2149_21412",
                    "voted": "2022-10-31T09:00:00.594Z"
                },
                { // most recent vote
                    "entry": "20K212-412_212VCD123",
                    "voted": "2023-01-21T09:00:00.594Z"
                }
            ],
            "minimal": [
                {
                    "entry": "20K212-412_212VCD123",
                    "voted": "2022-10-31T09:00:00.594Z"
                }
            ],
            "specific": [],
            "humorous": [
                {
                    "entry": "20K212-412_212VCD123",
                    "date": "2022-12-15T08:02:15.393Z"
                }
            ]
        }
    }
}
```

```
/
├── rsc/                 # The RESOURCE files
│   ├── submitted/       # 4. User PR files land here
│   ├── processed/       # 6. Bot moves files here
│   ├── published/       # 6. Bot writes JSON here
│   │   ├── entries.json 
│   │   └── votes.json
│   └── HTF0001.json     # HTF-INT encodings are here
│
├── src/                 # 8. Static Site Generator (SSG)
│   ├── actions/         # (Whatever name the SSG uses)
│   │   └── submit.js    # 3. User clicks submit
│   └── (other SSG files)
│
├── gen/                 # The GENERATED static site
│   ├── index.html
│   ├── term/
│   │   └── ephemeral-628.html  # (Pre-rendered HTML page)
│   └── (other generated assets)
│
├── .github/workflows/
│   ├── aggregate.yml    # 6. Bot 1: Process on PR merge
│   └── rebuild.yml      # 7. Bot 2: Runs SSG
│
└── package.json         # Config for the SSG
```

### Formats

There is one custom format used to store the Hîsyêô translations

#### HTF-INT

This format is an array of numbers, the first number is the encoding source file
and the rest of the numbers represent the encoded source text. 

#### HTF0001.json - An Encoding Source File
All words, syllables and punctuation gets their own object in the encodings
array of the encoding JSON file. The position in this array is the number value
that is used in HTF-INT encoded text.

```json
{
  "version": 1,
  "encodings": [
    {
      "type": "word",
      "latin": "noyo",
      "abugida": "ƨɀ",
      "syllabary": "ny"
    },
    {
      "type": "syllable",
      "latin": "no",
      "abugida": "ƨ",
      "syllabary": "n"
    },
    {
      "type": "syllable",
      "latin": "yo",
      "abugida": "ɀ",
      "syllabary": "y"
    },
    {
      "type": "punctuation",
      "latin": " ",
      "abugida": " ",
      "syllabary": " "
    },
    {
      "type": "punctuation",
      "latin": ".",
      "abugida": ":",
      "syllabary": "."
    },
    {
      "type": "punctuation",
      "latin": ",",
      "abugida": "､",
      "syllabary": ","
    }
}
```

When converting back into text, you can pick either latin, abugida or syllabary as the script that the outputted text will be in.

## End-to-End Workflow
This workflow is a "two-loop" system: a Data Loop (handled by Bot 1) and a
Site Loop (handled by Bot 2).

### Part 1: The "Write" Flow (User Submits Changes)
1. **User Visits Site:** The user loads the static site from the gen/ directory
   (either locally or hosted). The site is fast because it's all pre-built HTML.

2. **User Makes Changes:** The user uses the UI to add 2 new words and cast 5
   votes. This all happens in their browser, updating the app's staging JSON in
   localStorage.

3. **User Clicks "Submit":** This triggers your client-side JavaScript (possibly
   in src/scripts/submit-handler.js).

   The script takes the JSON staged in localstorage and prepares it for the PR.

   It generates a unique short filename using Base 64 filename-safe encoding
   (RFC 4648 §5) as a segment within the filename separated by periods  (e.g.,
   `sub.A12_301FA-SMO4.json`).

   It creates the GitHub "new file" URL, pre-filling the filename (pointing to `rsc/submitted/`) and value (the JSON content).

4. **User Creates PR:** The user is sent to GitHub. They see the pre-filled form, type a message, and click "Propose changes." This creates a new pull request.

### Part 2: The "Data Loop" (Bot 1 Aggregates Data)
5. **PR is Merged:** You (or a moderator) review the PR and merge it into the
   main branch.

6. **Bot 1 (aggregate.yml) Runs:** This merge triggers the first GitHub Action.

   It scans the `rsc/submitted/` directory.

   It processes the new `sub.A12_301FA-SMO4.json` submission file.

   It moves the submission file from `rsc/submitted/` to `rsc/processed/`.

   It updates `rsc/published/entries.json` and `rsc/published/votes.json` with
   the new data.

   It commits these changes directly to the main branch.

### Part 3: The "Site Loop" (Bot 2 Rebuilds the Site)
7. **Bot 2 (rebuild.yml) Runs:** The commit from Bot 1 (in step 6) is a new push
   to main. This immediately triggers the second GitHub Action.

8. **SSG Rebuilds:** This bot's job is simple:

   It checks out the latest main branch (which has the new `entries.json` and
   `votes.json`).

   It runs your SSG's build command (e.g., `npm run build`).

   The SSG runs, reads the new dictionary.json, and generates new static HTML
   files (e.g., new pages for the new words).

   The bot commits these newly-built files to the gen/ directory.

**Result:** A few moments later, the live static site is automatically updated
with the new words and vote counts, ready for the next user.