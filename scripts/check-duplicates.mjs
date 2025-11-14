import fs from 'fs/promises';
import path from 'path';

const SUBMITTED_DIR = path.join(process.cwd(), 'rsc', 'submitted');
const PROCESSED_DIR = path.join(process.cwd(), 'rsc', 'processed');

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
        // output relative path for the link
        console.log(`duplicate_submission_file=${path.relative(process.cwd(), otherFile)}`);
        process.exit(0);
      }
    }
  }

  console.log('duplicate_found=false');
}

run().catch(error => {
  console.error(`Failed to check for duplicates: ${error.message}`);
  process.exit(1);
});