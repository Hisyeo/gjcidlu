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

// Helper to decode base64f (filename-safe base64)
function base64f_decode(str) {
  // Convert base64f to standard base64
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  // Decode from base64
  return Buffer.from(base64, 'base64').toString('utf8');
}

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
    let summary = '#### Summary of Contributions:\n';
    if (newEntries.length > 0) {
      summary += '##### New Translations:\n';
      for (const entry of newEntries) {
        const decodedText = decode(entry.contents);
        const [termWord, termRandomId] = entry.termId.split('-');
        summary += `- **${decodedText}** (for term: *${termWord} (${termRandomId})*)\n`;
      }
    } else {
      summary += '- No new translations.\n';
    }

    if (votes.length > 0) {
      summary += '##### New Votes:\n';
      for (const vote of votes) {
        let decodedEntryText;
        const votedEntry = newEntries.find(e => e.id === vote.entryId);
        if (votedEntry) {
          decodedEntryText = decode(votedEntry.contents);
        } else {
          // Attempt to decode the entryId itself if it's a base64f encoded HTF-INT array
          try {
            const decodedEntryIdString = base64f_decode(vote.entryId);
            const htfIntArray = JSON.parse(decodedEntryIdString);
            decodedEntryText = decode(htfIntArray);
          } catch (e) {
            decodedEntryText = `(Existing entry - ID: ${vote.entryId})`;
          }
        }
        const [termWord, termRandomId] = vote.termId.split('-');
        summary += `- **${vote.voteType.charAt(0).toUpperCase() + vote.voteType.slice(1)}** vote for **${decodedEntryText}** (on term: *${termWord} (${termRandomId})*)\n`;
      }
    } else {
      summary += '- No new votes.\n';
    }
    
    console.log(summary);

  } catch (error) {
    console.error(`Failed to decode submission file: ${error.message}`);
    process.exit(1);
  }
}

run();
