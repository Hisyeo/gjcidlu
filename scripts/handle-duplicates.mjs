import fs from 'fs/promises';

async function run() {
  if (process.argv.length < 5) {
    console.error('Usage: node scripts/handle-duplicates.mjs <submission_file_path> <action> <entry_id>');
    process.exit(1);
  }

  const submissionFilePath = process.argv[2];
  const action = process.argv[3];
  const entryId = process.argv[4];

  const submissionContent = JSON.parse(await fs.readFile(submissionFilePath, 'utf-8'));

  if (action === 'change-to-vote') {
    const entry = submissionContent.newEntries.find(e => e.id === entryId);
    if (entry) {
      submissionContent.votes.push({
        termId: entry.termId,
        entryId: entry.id,
        voteType: 'overall', // Default to 'overall'
      });
      submissionContent.newEntries = submissionContent.newEntries.filter(e => e.id !== entryId);
    }
  } else if (action === 'remove-entry') {
    submissionContent.newEntries = submissionContent.newEntries.filter(e => e.id !== entryId);
  }

  await fs.writeFile(submissionFilePath, JSON.stringify(submissionContent, null, 2));
}

run().catch(error => {
  console.error(`Failed to handle duplicate entry: ${error.message}`);
  process.exit(1);
});
