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
    const { author, newTerms = [], newEntries = [], votes = [] } = submissionContent;

    let summary = '';

    // Submitter Verification
    if (author && author.system && author.id) {
      let verificationLink = '';
      switch (author.system.toLowerCase()) {
        case 'discord':
          verificationLink = `https://discordapp.com/users/${author.id}`;
          break;
        case 'reddit':
          verificationLink = `https://www.reddit.com/message/compose/?to=${author.id}`;
          break;
        case 'email':
          verificationLink = `mailto:${author.id}`;
          break;
        default:
          verificationLink = `No verification link available for system: ${author.system}`;
      }
      summary += `#### Submitter Verification\n`;
      summary += `- **System:** ${author.system}\n`;
      summary += `- **ID:** ${author.id}\n`;
      summary += `- **[Verify User](${verificationLink})**\n\n`;
    } else {
      summary += `#### Submitter Verification\n`;
      summary += `- Author information is missing or incomplete.\n\n`;
    }


    // Summary of Contributions
    summary += '#### Summary of Contributions:\n';

    if (newTerms.length > 0) {
      summary += '##### New Terms:\n';
      for (const term of newTerms) {
        const termName = term.id.split('-')[0];
        const longmanLink = `https://www.ldoceonline.com/dictionary/${termName.toLowerCase()}`;
        summary += `- **${termName}** (${term.pos}.): *${term.description}* ([Longman's](${longmanLink}))\n`;
      }
    } else {
      summary += '\n- No new terms.\n';
    }

    if (newEntries.length > 0) {
      summary += '##### New Translations:\n';
      for (const entry of newEntries) {
        const decodedText = decode(entry.contents);
        const [termWord, termRandomId] = entry.termId.split('-');
        summary += `- **${decodedText}** (for term: *${termWord} (${termRandomId})*)\n`;
      }
    } else {
      summary += '\n- No new translations.\n';
    }

    if (votes.length > 0) {
      summary += '##### New Votes:\n';
      for (const vote of votes) {
        const [termWord, termRandomId] = vote.termId.split('-');
        // The entryId is now human-readable, so we just display it.
        summary += `- **${vote.voteType.charAt(0).toUpperCase() + vote.voteType.slice(1)}** vote for **${vote.entryId}** (on term: *${termWord} (${termRandomId})*)\n`;
      }
    } else {
      summary += '\n- No new votes.\n';
    }

    // Submission Receipt
    summary += `\n<details>\n<summary>Submission Receipt</summary>\n\n` + '```json\n' + `${JSON.stringify(submissionContent, null, 2)}
` + '```\n\n</details>';
    
    console.log(summary);

  } catch (error) {
    console.error(`Failed to decode submission file: ${error.message}`);
    process.exit(1);
  }
}

run();