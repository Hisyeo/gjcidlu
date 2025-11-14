import fs from 'fs/promises';
import path from 'path';

const SUBMITTED_DIR = path.join(process.cwd(), 'rsc', 'submitted');
const PROCESSED_DIR = path.join(process.cwd(), 'rsc', 'processed');
const ENTRIES_PATH = path.join(process.cwd(), 'rsc', 'published', 'entries.json');

async function getAllSubmissionFiles(dir) {
  try {
    const files = await fs.readdir(dir);
    return files.filter(file => file.endsWith('.json')).map(file => path.join(dir, file));
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []; // Directory doesn't exist, return empty array
    }
    throw error;
  }
}

async function run() {
  if (process.argv.length < 3) {
    console.error('Usage: node scripts/check-duplicates.mjs <path_to_current_submission.json>');
    process.exit(1);
  }

  const currentSubmissionPath = path.resolve(process.argv[2]);
  const currentSubmissionContent = JSON.parse(await fs.readFile(currentSubmissionPath, 'utf-8'));
  const currentNewEntries = currentSubmissionContent.newEntries || [];

  // Check against other submission files
  const otherSubmittedFiles = await getAllSubmissionFiles(SUBMITTED_DIR);
  const processedFiles = await getAllSubmissionFiles(PROCESSED_DIR);
  const allOtherFiles = [...otherSubmittedFiles, ...processedFiles].filter(file => file !== currentSubmissionPath);

  for (const entry of currentNewEntries) {
    for (const otherFile of allOtherFiles) {
      const otherSubmissionContent = JSON.parse(await fs.readFile(otherFile, 'utf-8'));
      const otherNewEntries = otherSubmissionContent.newEntries || [];

      const duplicate = otherNewEntries.find(otherEntry =>
        otherEntry.termId === entry.termId &&
        JSON.stringify(otherEntry.contents) === JSON.stringify(entry.contents)
      );

      if (duplicate) {
        console.log(`duplicate_found=true`);
        console.log(`duplicate_entry_id=${entry.id}`);
        console.log(`duplicate_submission_file=${path.relative(process.cwd(), otherFile)}`);
        process.exit(0);
      }
    }
  }

  // Check against entries.json
  try {
    const entriesContent = JSON.parse(await fs.readFile(ENTRIES_PATH, 'utf-8'));
    for (const entry of currentNewEntries) {
      const termEntries = entriesContent[entry.termId];
      if (termEntries) {
        for (const entryId in termEntries) {
          if (entryId.startsWith('$')) continue;
          const existingEntry = termEntries[entryId];
          if (JSON.stringify(existingEntry.contents) === JSON.stringify(entry.contents)) {
            console.log(`duplicate_found=true`);
            console.log(`duplicate_entry_id=${entry.id}`);
            console.log(`duplicate_submission_file=rsc/published/entries.json`);
            process.exit(0);
          }
        }
      }
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    // entries.json doesn't exist, so no duplicates to check against.
  }

  console.log('duplicate_found=false');
}

run().catch(error => {
  console.error(`Failed to check for duplicates: ${error.message}`);
  process.exit(1);
});
