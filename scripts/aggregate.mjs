import fs from 'fs/promises';
import path from 'path';

const SUBMITTED_DIR = path.join(process.cwd(), 'rsc', 'submitted');
const PROCESSED_DIR = path.join(process.cwd(), 'rsc', 'processed');
const PUBLISHED_DIR = path.join(process.cwd(), 'rsc', 'published');
const ENTRIES_FILE = path.join(PUBLISHED_DIR, 'entries.json');
const VOTES_FILE = path.join(PUBLISHED_DIR, 'votes.json');

// This is the initial state of the data before any submissions are processed.
const baseEntries = {};
const baseVotes = {};

async function getAllSubmissionFiles() {
    // Ensure directories exist to prevent errors on a clean checkout
    await fs.mkdir(SUBMITTED_DIR, { recursive: true });
    await fs.mkdir(PROCESSED_DIR, { recursive: true });
    
    const submitted = (await fs.readdir(SUBMITTED_DIR)).map(f => path.join(SUBMITTED_DIR, f));
    const processed = (await fs.readdir(PROCESSED_DIR)).map(f => path.join(PROCESSED_DIR, f));
    return [...submitted, ...processed];
}

async function main() {
  console.log('Starting aggregation script for build process...');

  // Ensure output directory exists
  await fs.mkdir(PUBLISHED_DIR, { recursive: true });

  const allFiles = await getAllSubmissionFiles();
  if (allFiles.length === 0) {
    console.log('No submissions found. Writing empty data files.');
    await fs.writeFile(ENTRIES_FILE, JSON.stringify(baseEntries, null, 2));
    await fs.writeFile(VOTES_FILE, JSON.stringify(baseVotes, null, 2));
    return;
  }

  console.log(`Found ${allFiles.length} total submission file(s) to process.`);

  // Start with a clean slate
  const entriesData = JSON.parse(JSON.stringify(baseEntries));
  const votesData = JSON.parse(JSON.stringify(baseVotes));

  for (const filePath of allFiles) {
    if(path.extname(filePath) !== '.json') continue;

    const submissionContent = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    const authorObj = submissionContent.author;
    
    if (!authorObj || !authorObj.system || !authorObj.id) {
        console.warn(`Skipping file ${path.basename(filePath)} due to missing author object.`);
        continue;
    }
    
    const authorId = `${authorObj.system.toLowerCase()}:${authorObj.id}`;

    // Process new terms
    submissionContent.newTerms?.forEach(term => {
      if (!entriesData[term.id]) {
        entriesData[term.id] = {
          $pos: term.pos,
          $desc: term.description,
        };
      }
    });

    // Process new entries
    submissionContent.newEntries?.forEach(entry => {
      if (entriesData[entry.termId] && !entriesData[entry.termId][entry.id]) {
        entriesData[entry.termId][entry.id] = {
          submitter: authorId,
          created: entry.created,
          contents: entry.contents,
          ...(entry.original && { original: entry.original }),
        };
      }
    });

    // Process votes
    submissionContent.votes?.forEach(vote => {
      if (!votesData[vote.termId]) votesData[vote.termId] = {};
      if (!votesData[vote.termId][authorId]) votesData[vote.termId][authorId] = {};
      if (!votesData[vote.termId][authorId][vote.voteType]) votesData[vote.termId][authorId][vote.voteType] = [];
      
      votesData[vote.termId][authorId][vote.voteType].push({
        entry: vote.entryId,
        voted: vote.voted,
      });
    });
  }

  // Write the final aggregated data
  await fs.writeFile(ENTRIES_FILE, JSON.stringify(entriesData, null, 2));
  console.log('Successfully generated entries.json.');
  await fs.writeFile(VOTES_FILE, JSON.stringify(votesData, null, 2));
  console.log('Successfully generated votes.json.');

  console.log('Aggregation script finished.');
}

main().catch(error => {
  console.error('An error occurred during aggregation:', error);
  process.exit(1);
});