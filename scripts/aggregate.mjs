import fs from 'fs/promises';
import path from 'path';

const SUBMITTED_DIR = path.join(process.cwd(), 'rsc', 'submitted');
const PROCESSED_DIR = path.join(process.cwd(), 'rsc', 'processed');
const PUBLISHED_DIR = path.join(process.cwd(), 'rsc', 'published');
const ENTRIES_FILE = path.join(PUBLISHED_DIR, 'entries.json');
const VOTES_FILE = path.join(PUBLISHED_DIR, 'votes.json');

async function main() {
  const prAuthor = process.argv[2]; // Get PR author from command line argument
  if (!prAuthor) {
    console.error('Error: PR author not provided to the aggregation script.');
    process.exit(1);
  }
  console.log(`Starting aggregation script for PR author: ${prAuthor}`);

  // Ensure directories exist
  await fs.mkdir(PROCESSED_DIR, { recursive: true });

  const submittedFiles = await fs.readdir(SUBMITTED_DIR);
  if (submittedFiles.length === 0) {
    console.log('No new submissions found. Exiting.');
    return;
  }

  console.log(`Found ${submittedFiles.length} new submission(s).`);

  // Read the main data files
  const entriesData = JSON.parse(await fs.readFile(ENTRIES_FILE, 'utf-8'));
  const votesData = JSON.parse(await fs.readFile(VOTES_FILE, 'utf-8'));

  for (const filename of submittedFiles) {
    const filePath = path.join(SUBMITTED_DIR, filename);
    if(path.extname(filename) !== '.json') continue;

    console.log(`Processing ${filename}...`);
    const submissionContent = JSON.parse(await fs.readFile(filePath, 'utf-8'));

    // Process new terms
    submissionContent.newTerms?.forEach(term => {
      if (!entriesData[term.id]) {
        entriesData[term.id] = {
          $pos: term.pos,
          $desc: term.description,
        };
        console.log(`  - Added new term: ${term.id}`);
      }
    });

    // Process new entries
    submissionContent.newEntries?.forEach(entry => {
      if (entriesData[entry.termId] && !entriesData[entry.termId][entry.id]) {
        entriesData[entry.termId][entry.id] = {
          submitter: prAuthor, // Use PR author
          created: entry.created,
          contents: entry.contents,
          ...(entry.original && { original: entry.original }),
        };
        console.log(`  - Added new entry: ${entry.id} for term ${entry.termId}`);
      }
    });

    // Process votes
    submissionContent.votes?.forEach(vote => {
      if (!votesData[vote.termId]) {
        votesData[vote.termId] = {};
      }
      if (!votesData[vote.termId][prAuthor]) { // Use PR author
        votesData[vote.termId][prAuthor] = {};
      }
      if (!votesData[vote.termId][prAuthor][vote.voteType]) { // Use PR author
        votesData[vote.termId][prAuthor][vote.voteType] = [];
      }
      // Add the new vote. The last one in the array is the most recent.
      votesData[vote.termId][prAuthor][vote.voteType].push({ // Use PR author
        entry: vote.entryId,
        voted: vote.voted,
      });
      console.log(`  - Added ${vote.voteType} vote for entry ${vote.entryId} by ${prAuthor}`);
    });

    // Move processed file
    await fs.rename(filePath, path.join(PROCESSED_DIR, filename));
    console.log(`  - Moved ${filename} to processed directory.`);
  }

  // Write updated data back to files
  await fs.writeFile(ENTRIES_FILE, JSON.stringify(entriesData, null, 2));
  console.log('Successfully updated entries.json.');
  await fs.writeFile(VOTES_FILE, JSON.stringify(votesData, null, 2));
  console.log('Successfully updated votes.json.');

  console.log('Aggregation script finished.');
}

main().catch(error => {
  console.error('An error occurred during aggregation:', error);
  process.exit(1);
});