import fs from 'fs/promises';
import path from 'path';

const SUBMITTED_DIR = path.join(process.cwd(), 'rsc', 'submissions');
const SITE_URL = process.env.SITE_URL || '';

async function getAllSubmissionFiles(dir) {
  try {
    const files = await fs.readdir(dir);
    return files.filter(file => file.endsWith('.json')).map(file => path.join(dir, file));
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function findDuplicate(entry, allOtherFiles) {
  for (const otherFile of allOtherFiles) {
    const otherSubmissionContent = JSON.parse(await fs.readFile(otherFile, 'utf-8'));
    const otherNewEntries = otherSubmissionContent.newEntries || [];
    const duplicate = otherNewEntries.find(otherEntry =>
      otherEntry.termId === entry.termId &&
      JSON.stringify(otherEntry.contents) === JSON.stringify(entry.contents)
    );
    if (duplicate) {
      return { duplicate, file: otherFile };
    }
  }
  return null;
}

async function run() {
  if (process.argv.length < 3) {
    console.error('Usage: node scripts/generate-denied-comment.mjs <path_to_submission.json>');
    process.exit(1);
  }

  const submissionFilePath = process.argv[2];
  const submissionContent = JSON.parse(await fs.readFile(submissionFilePath, 'utf-8'));
  const { newEntries = [], newTerms = [], votes = [] } = submissionContent;

  const otherSubmittedFiles = await getAllSubmissionFiles(SUBMITTED_DIR);
  const allOtherFiles = otherSubmittedFiles.filter(file => path.resolve(file) !== path.resolve(submissionFilePath));

  const duplicatesFound = [];
  const nonDuplicateEntries = [];

  for (const entry of newEntries) {
    const duplicateInfo = await findDuplicate(entry, allOtherFiles);
    if (duplicateInfo) {
      duplicatesFound.push({
        ...entry,
        isProcessed: processedFiles.includes(duplicateInfo.file),
      });
    } else {
      nonDuplicateEntries.push(entry);
    }
  }

  let comment = 'Your submission was denied because there was a duplicate found that was not caught by the client-side application.\n\n';

  if (duplicatesFound.length > 0) {
    comment += 'Here are all of the duplicates found in your submission:\n';
    for (const entry of duplicatesFound) {
      const termLink = `${SITE_URL}/term/${entry.termId}`;
      if (entry.isProcessed) {
        comment += `- **${entry.id}** (Vote for this one here: [${entry.termId}](${termLink}#${entry.id}))\n`;
      } else {
        comment += `- **${entry.id}** (Not yet present on site, please allow more time for processing)\n`;
      }
    }
    comment += '\n';
  }

  comment += 'Here are all of the other submission contents that were discarded with this PR and should be re-added:\n';
  for (const entry of nonDuplicateEntries) {
    const termLink = `${SITE_URL}/term/${entry.termId}`;
    const value = Buffer.from(JSON.stringify(entry.contents)).toString('base64');
    comment += `- **${entry.id}** (Add this translation here: [${entry.termId}](${termLink}?new_translation_value=${value}))\n`;
  }
  for (const term of newTerms) {
    const newTermLink = `${SITE_URL}/new-term`;
    comment += `- New term: **${term.id}** (Add this term here: [New Term](${newTermLink}?value=${encodeURIComponent(JSON.stringify(term))}))\n`;
  }
  for (const vote of votes) {
    const termLink = `${SITE_URL}/term/${vote.termId}`;
    comment += `- Vote for **${vote.entryId}** (Add this vote here: [${vote.termId}](${termLink}#${vote.entryId}))\n`;
  }

  console.log(comment);
}

run().catch(error => {
  console.error(`Failed to generate denied comment: ${error.message}`);
  process.exit(1);
});