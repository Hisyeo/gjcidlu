import fs from 'fs/promises';
import path from 'path';

// --- Start of inlined htf-int.ts content ---
let htfData;

function encodeToSnakeCaseSyllabary(encoded) {
  if (!encoded || encoded.length < 1) {
    return '';
  }

  const data = encoded.slice(1);
  let result = '';
  let prevType = null;

  for (const index of data) {
    if (index >= 0 && index < htfData.encodings.length) {
      const encoding = htfData.encodings[index];
      const currentType = encoding.type;

      if (currentType === 'punctuation') {
        continue;
      }

      if (prevType === 'syllable' && currentType === 'word') {
        result += '_';
      }

      if (currentType === 'word') {
        result += encoding.syllabary + '_';
      } else if (currentType === 'syllable') {
        result += encoding.syllabary;
      }
      
      prevType = currentType;
    }
  }

  if (result.endsWith('_')) {
    result = result.slice(0, -1);
  }

  return result;
}
// --- End of inlined htf-int.ts content ---

const PROCESSED_DIR = path.join(process.cwd(), 'rsc', 'processed');
const PUBLISHED_DIR = path.join(process.cwd(), 'rsc', 'published');
const ENTRIES_FILE = path.join(PUBLISHED_DIR, 'entries.json');
const VOTES_FILE = path.join(PUBLISHED_DIR, 'votes.json');
const HTF_FILE = path.join(process.cwd(), 'rsc', 'HTF0002.json');

async function main() {
  console.log('Starting re-processing script...');

  // Load HTF data
  htfData = JSON.parse(await fs.readFile(HTF_FILE, 'utf-8'));

  // Ensure directories exist
  await fs.mkdir(PROCESSED_DIR, { recursive: true });
  await fs.mkdir(PUBLISHED_DIR, { recursive: true });

  // Start with empty objects to overwrite existing data
  let entriesData = {};
  let votesData = {};
  const idMap = new Map();

  const submissionFiles = (await fs.readdir(PROCESSED_DIR)).filter(f => f.endsWith('.json'));

  if (submissionFiles.length === 0) {
    console.log('No processed submissions to re-process. Exiting.');
    await fs.writeFile(ENTRIES_FILE, JSON.stringify(entriesData, null, 2));
    await fs.writeFile(VOTES_FILE, JSON.stringify(votesData, null, 2));
    return;
  }

  console.log(`Found ${submissionFiles.length} submission file(s) to re-process.`);

  const allSubmissions = await Promise.all(
    submissionFiles.map(file => 
      fs.readFile(path.join(PROCESSED_DIR, file), 'utf-8').then(JSON.parse)
    )
  );

  // First pass: build idMap and entriesData
  console.log('First pass: Building ID map and entries data...');
  allSubmissions.forEach((submissionContent, index) => {
    const file = submissionFiles[index]; // Get the filename
    const authorObj = submissionContent.author;
    if (!authorObj || !authorObj.system || !authorObj.id) return;
    const authorId = `${authorObj.system.toLowerCase()}:${authorObj.id}`;

    submissionContent.newTerms?.forEach(term => {
      if (!entriesData[term.id]) {
        entriesData[term.id] = {
          $pos: term.pos,
          $desc: term.description,
        };
      }
    });

    submissionContent.newEntries?.forEach(entry => {
      const newId = encodeToSnakeCaseSyllabary(entry.contents);
      idMap.set(entry.id, newId); // Map old ID to new ID

      if (entriesData[entry.termId]) {
        entriesData[entry.termId][newId] = {
          submitter: authorId,
          created: entry.created || new Date().toISOString(), // Preserve original creation date if available
          contents: entry.contents,
          sourceFile: file,
          ...(entry.original && { original: entry.original }),
        };
      }
    });
  });

  // Second pass: build votesData
  console.log('Second pass: Building votes data...');
  for (const submissionContent of allSubmissions) {
    const authorObj = submissionContent.author;
    if (!authorObj || !authorObj.system || !authorObj.id) continue;
    const authorId = `${authorObj.system.toLowerCase()}:${authorObj.id}`;

    submissionContent.votes?.forEach(vote => {
      const newEntryId = idMap.get(vote.entryId) || vote.entryId; // Use new ID if available

      if (!votesData[vote.termId]) votesData[vote.termId] = {};
      if (!votesData[vote.termId][authorId]) votesData[vote.termId][authorId] = {};
      if (!votesData[vote.termId][authorId][vote.voteType]) votesData[vote.termId][authorId][vote.voteType] = [];
      
      const votedTimestamp = vote.voted || new Date().toISOString(); // Preserve original vote date

      votesData[vote.termId][authorId][vote.voteType].push({
        entry: newEntryId,
        voted: votedTimestamp,
      });
    });
  }

  // Write the final aggregated data
  await fs.writeFile(ENTRIES_FILE, JSON.stringify(entriesData, null, 2));
  console.log('Successfully updated entries.json.');
  await fs.writeFile(VOTES_FILE, JSON.stringify(votesData, null, 2));
  console.log('Successfully updated votes.json.');

  console.log('Re-processing script finished.');
}

main().catch(error => {
  console.error('An error occurred during re-processing:', error);
  process.exit(1);
});