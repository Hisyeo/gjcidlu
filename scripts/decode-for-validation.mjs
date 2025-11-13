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
    // Use console.error in a script to ensure it's visible in logs
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

    if (newEntries.length === 0) {
      return; // No new entries to decode, exit silently
    }

    let output = '#### Decoded Translations:\n';
    for (const entry of newEntries) {
      const decodedText = decode(entry.contents);
      output += `- **${decodedText}** (for term: *${entry.termId}*)\n`;
    }
    
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
