import fs from 'fs/promises';
import path from 'path';

const SUBMITTED_DIR = path.join(process.cwd(), 'rsc', 'submitted');

async function run() {
  if (process.argv.length < 3) {
    console.error('Usage: node scripts/check-duplicates.mjs <path_to_current_submission.json>');
    process.exit(1);
  }

  const currentSubmissionPath = process.argv[2];
  const currentSubmissionContent = JSON.parse(await fs.readFile(currentSubmissionPath, 'utf-8'));
  const currentNewEntries = currentSubmissionContent.newEntries || [];

  const otherSubmissionFiles = (await fs.readdir(SUBMITTED_DIR))
    .filter(file => path.join(SUBMITTED_DIR, file) !== currentSubmissionPath && file.endsWith('.json'));

  for (const entry of currentNewEntries) {
    for (const file of otherSubmissionFiles) {
      const otherSubmissionPath = path.join(SUBMITTED_DIR, file);
      const otherSubmissionContent = JSON.parse(await fs.readFile(otherSubmissionPath, 'utf-8'));
      const otherNewEntries = otherSubmissionContent.newEntries || [];

      const duplicate = otherNewEntries.find(otherEntry =>
        otherEntry.termId === entry.termId &&
        JSON.stringify(otherEntry.contents) === JSON.stringify(entry.contents)
      );

      if (duplicate) {
        console.log(`duplicate_found=true`);
        console.log(`duplicate_entry_id=${entry.id}`);
        console.log(`duplicate_submission_file=${file}`);
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
