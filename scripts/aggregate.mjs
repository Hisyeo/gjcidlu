import fs from 'fs/promises';
import path from 'path';

const SUBMITTED_DIR = path.join(process.cwd(), 'rsc', 'submitted');
const PROCESSED_DIR = path.join(process.cwd(), 'rsc', 'processed');
const PUBLISHED_DIR = path.join(process.cwd(), 'rsc', 'published');
const ENTRIES_FILE = path.join(PUBLISHED_DIR, 'entries.json');
const VOTES_FILE = path.join(PUBLISHED_DIR, 'votes.json');

async function main() {
  console.log('Starting aggregation script...');

  // Ensure directories exist
  await fs.mkdir(SUBMITTED_DIR, { recursive: true });
  await fs.mkdir(PROCESSED_DIR, { recursive: true });
  await fs.mkdir(PUBLISHED_DIR, { recursive: true });

  // Read existing data or start with empty objects
  let entriesData, votesData;
  try {
    entriesData = JSON.parse(await fs.readFile(ENTRIES_FILE, 'utf-8'));
  } catch (e) {
    if (e.code === 'ENOENT') {
      entriesData = {};
    } else {
      throw e;
    }
  }
  try {
    votesData = JSON.parse(await fs.readFile(VOTES_FILE, 'utf-8'));
  } catch (e) {
    if (e.code === 'ENOENT') {
      votesData = {};
    } else {
      throw e;
    }
  }

  const submissionFiles = (await fs.readdir(SUBMITTED_DIR)).filter(f => f.endsWith('.json'));

  if (submissionFiles.length === 0) {
    console.log('No new submissions to process. Exiting.');
    // Ensure files exist even if there's nothing to do
    await fs.writeFile(ENTRIES_FILE, JSON.stringify(entriesData, null, 2));
    await fs.writeFile(VOTES_FILE, JSON.stringify(votesData, null, 2));
    return;
  }

  console.log(`Found ${submissionFiles.length} new submission file(s) to process.`);

  for (const file of submissionFiles) {
    const filePath = path.join(SUBMITTED_DIR, file);
    const submissionContent = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    const authorObj = submissionContent.author;
    
    if (!authorObj || !authorObj.system || !authorObj.id) {
        console.warn(`Skipping file ${file} due to missing author object.`);
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
          created: new Date().toISOString(),
          contents: entry.contents,
          sourceFile: file,
          ...(entry.original && { original: entry.original }),
        };
      }
    });

    // Process votes
    submissionContent.votes?.forEach(vote => {
      if (!votesData[vote.termId]) votesData[vote.termId] = {};
      if (!votesData[vote.termId][authorId]) votesData[vote.termId][authorId] = {};
      if (!votesData[vote.termId][authorId][vote.voteType]) votesData[vote.termId][authorId][vote.voteType] = [];
      
      const votedTimestamp = new Date().toISOString();

      votesData[vote.termId][authorId][vote.voteType].push({
        entry: vote.entryId,
        voted: votedTimestamp,
      });
    });

    // Move processed file
    const newPath = path.join(PROCESSED_DIR, file);
    await fs.rename(filePath, newPath);
    console.log(`Processed and moved ${file}.`);
  }

  // Write the final aggregated data
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
