import fs from 'fs/promises';
import htf2 from '../rsc/HTF0002.json' assert { type: 'json' };

/**
 * This is a standalone script for use in GitHub Actions.
 * The decoding logic is duplicated from src/lib/htf-int.ts to avoid
 * needing a TypeScript runner in the workflow.
 */

// --- Start of duplicated logic ---

const htfData = htf2;

function decode(encoded) {
  if (!encoded || encoded.length < 1) {
    return '';
  }

  const version = encoded[0];
  if (version !== htfData.version) {
    console.error(`Mismatched HTF version. Expected ${htfData.version}, got ${version}.`);
  }

  const data = encoded.slice(1);
  return data
    .map(index => {
      if (index >= 0 && index < htfData.encodings.length) {
        return htfData.encodings[index].latin;
      }
      return htfData.encodings[0].latin; // Return illegal character for invalid indices
    })
    .join('');
}

// --- End of duplicated logic ---


async function run() {
  if (process.argv.length < 3) {
    console.error('Usage: node scripts/decode-for-validation.mjs <path_to_submission.json>');
    process.exit(1);
  }

  const filePath = process.argv[2];
  try {
    const submissionContent = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    const newEntries = submissionContent.newEntries || [];
    const votes = submissionContent.votes || [];

    // Create a quick summary
    let summary = '#### Decoded New Translations:\n';
    if (newEntries.length > 0) {
      for (const entry of newEntries) {
        const decodedText = decode(entry.contents);
        summary += `- **${decodedText}** (for term: *${entry.termId}*)\n`;
      }
    } else {
      summary += '- (No new translations in this submission)\n';
    }

    // Add decoded fields to the full submission object for the details view
    if (newEntries.length > 0) {
      submissionContent.newEntries.forEach(entry => {
        entry.decoded_contents = decode(entry.contents);
      });
    }

    if (votes.length > 0) {
      submissionContent.votes.forEach(vote => {
        const votedEntry = newEntries.find(e => e.id === vote.entryId);
        if (votedEntry) {
          vote.decoded_entry = decode(votedEntry.contents);
        } else {
          vote.decoded_entry = `(Existing entry - ID: ${vote.entryId})`;
        }
      });
    }

    const fullReceipt = JSON.stringify(submissionContent, null, 2);

    let output = `${summary}\n<details><summary>Full Submission Receipt</summary>\n\n\`\`\`json\n${fullReceipt}\n\`\`\`\n\n</details>`;
    
    // This special format is for multiline strings in GitHub Actions
    output = output.replace(/%/g, '%25');
    output = output.replace(/\n/g, '%0A');
    output = output.replace(/\r/g, '%0D');

    console.log(output);

  } catch (error) {
    console.error(`Failed to decode submission file: ${error.message}`);
    process.exit(1);
  }
}

run();
