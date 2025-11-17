import fs from 'fs/promises';
import path from 'path';

const SUBMISSIONS_DIR = path.join(process.cwd(), 'rsc', 'submissions');
const ENCODINGS_DIR = path.join(process.cwd(), 'rsc', 'encodings');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const ENTRIES_FILE = path.join(PUBLIC_DIR, 'entries.json');
const VOTES_FILE = path.join(PUBLIC_DIR, 'votes.json');
const HTF_FILE = path.join(ENCODINGS_DIR, 'HTF0002.json'); // Assuming HTF0002 is the one to use

let htfData;

// Inlined function from htf-int.ts to avoid import issues in script
function encodeToSnakeCaseSyllabary(encoded) {
  if (!encoded || encoded.length < 1) return '';
  const data = encoded.slice(1);
  let result = '';
  let prevType = null;
  for (const index of data) {
    if (index >= 0 && index < htfData.encodings.length) {
      const encoding = htfData.encodings[index];
      const currentType = encoding.type;
      if (currentType === 'punctuation') continue;
      if (prevType === 'syllable' && currentType === 'word') result += '_';
      if (currentType === 'word') result += encoding.syllabary + '_';
      else if (currentType === 'syllable') result += encoding.syllabary;
      prevType = currentType;
    }
  }
  if (result.endsWith('_')) result = result.slice(0, -1);
  return result;
}

async function main() {
  console.log('Starting aggregation script...');

  // Load HTF data for ID generation
  htfData = JSON.parse(await fs.readFile(HTF_FILE, 'utf-8'));

  // Start with empty objects to build from scratch
  let entriesData = {};
  let votesData = {};
  const idMap = new Map();

  const submissionFiles = (await fs.readdir(SUBMISSIONS_DIR)).filter(f => f.endsWith('.json'));

  if (submissionFiles.length === 0) {
    console.log('No submissions found. Writing empty files.');
    await fs.writeFile(ENTRIES_FILE, JSON.stringify(entriesData, null, 2));
    await fs.writeFile(VOTES_FILE, JSON.stringify(votesData, null, 2));
    return;
  }

  console.log(`Found ${submissionFiles.length} submission file(s) to process.`);

  const allSubmissions = await Promise.all(
    submissionFiles.map(async file => {
      const content = JSON.parse(await fs.readFile(path.join(SUBMISSIONS_DIR, file), 'utf-8'));
      const timestampMatch = file.match(/sub\.(\d{8}T\d{6})-/);
      let timestamp = new Date().toISOString(); // Default to current time if not found
      if (timestampMatch && timestampMatch[1]) {
        const datePart = timestampMatch[1].substring(0, 8);
        const timePart = timestampMatch[1].substring(9, 15);
        timestamp = `${datePart.substring(0, 4)}-${datePart.substring(4, 6)}-${datePart.substring(6, 8)}T${timePart.substring(0, 2)}:${timePart.substring(2, 4)}:${timePart.substring(4, 6)}.000Z`;
      }
      return { file, content, timestamp };
    })
  );

  // First pass: build idMap and entriesData
  console.log('First pass: Building ID map and entries data...');
  for (const { file, content: submissionContent, timestamp } of allSubmissions) {
    const authorObj = submissionContent.author;
    if (!authorObj || !authorObj.system || !authorObj.id) continue;
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
          created: timestamp,
          contents: entry.contents,
          sourceFile: file,
          ...(entry.original && { original: entry.original }),
        };
      }
    });
  }

  // Second pass: build votesData
  console.log('Second pass: Building votes data...');
  for (const { content: submissionContent, timestamp } of allSubmissions) {
    const authorObj = submissionContent.author;
    if (!authorObj || !authorObj.system || !authorObj.id) continue;
    const authorId = `${authorObj.system.toLowerCase()}:${authorObj.id}`;

    submissionContent.votes?.forEach(vote => {
      const newEntryId = idMap.get(vote.entryId) || vote.entryId;

      if (!votesData[vote.termId]) votesData[vote.termId] = {};
      if (!votesData[vote.termId][authorId]) votesData[vote.termId][authorId] = {};
      if (!votesData[vote.termId][authorId][vote.voteType]) votesData[vote.termId][authorId][vote.voteType] = [];
      
      const votedTimestamp = timestamp;

      votesData[vote.termId][authorId][vote.voteType].push({
        entry: newEntryId,
        voted: votedTimestamp,
      });
    });
  }

  await fs.writeFile(ENTRIES_FILE, JSON.stringify(entriesData, null, 2));
  console.log('Successfully generated entries.json in public/.');
  await fs.writeFile(VOTES_FILE, JSON.stringify(votesData, null, 2));
  console.log('Successfully generated votes.json in public/.');

  console.log('Aggregation script finished.');
}

main().catch(error => {
  console.error('An error occurred during aggregation:', error);
  process.exit(1);
});