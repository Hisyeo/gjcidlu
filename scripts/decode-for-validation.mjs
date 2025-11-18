import fs from 'fs/promises';
import htf2 from '../rsc/encodings/HTF0002.json' assert { type: 'json' };
import htf3 from '../rsc/encodings/HTF0003.json' assert { type: 'json' };

// --- Start of duplicated logic ---
const ILLEGAL_CHAR = 0;
const CAPITAL_OPEN = 1;
const CAPITAL_CLOSE = 2;

function decode(encoded) {
  if (!encoded || encoded.length < 1) {
    return '';
  }
  const version = encoded[0];
  const htfData = version === 2 ? htf2 : htf3;

  if (version !== htfData.version) {
    console.error(`Mismatched HTF version. Expected ${htfData.version}, got ${version}.`);
  }

  const data = encoded.slice(1);
  let result = '';
  let capitalizeNext = false;

  for (const index of data) {
    if (version === 3) {
      if (index === CAPITAL_OPEN) {
        capitalizeNext = true;
        continue;
      }
      if (index === CAPITAL_CLOSE) {
        capitalizeNext = false;
        continue;
      }
    }

    if (index >= 0 && index < htfData.encodings.length) {
      const encoding = htfData.encodings[index];
      let value = encoding.latin;
      if (capitalizeNext) {
        if (encoding.type === 'word' || encoding.type === 'syllable') {
          value = value.charAt(0).toUpperCase() + value.slice(1);
        }
      }
      result += value;
    } else {
      result += htfData.encodings[ILLEGAL_CHAR].latin; // Return illegal character for invalid indices
    }
  }

  return result;
}
// --- End of duplicated logic ---

function generateContributionsSummary(newTerms, newEntries, votes) {
  let summary = '#### Summary of Contributions:\n';

  if (newTerms.length > 0) {
    summary += '##### New Terms:\n';
    for (const term of newTerms) {
      const termName = term.id.split('-')[0];
      const longmanLink = `https://www.ldoceonline.com/dictionary/${termName.toLowerCase()}`;
      summary += `- **${termName}** (${term.pos}.): *${term.description}* ([Longman's](${longmanLink}))\n`;
    }
  } else {
    summary += '- No new terms.\n';
  }

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
      const [termWord, termRandomId] = vote.termId.split('-');
      summary += `- **${vote.voteType.charAt(0).toUpperCase() + vote.voteType.slice(1)}** vote for **${vote.entryId}** (on term: *${termWord} (${termRandomId})*)\n`;
    }
  } else {
    summary += '- No new votes.\n';
  }

  return summary;
}

async function run() {
  if (process.argv.length < 3) {
    console.error('Usage: node scripts/decode-for-validation.mjs <path_to_submission.json>');
    process.exit(1);
  }

  const filePath = process.argv[2];
  try {
    const submissionContent = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    const { author, newTerms = [], newEntries = [], votes = [] } = submissionContent;

    const contributionsSummary = generateContributionsSummary(newTerms, newEntries, votes);

    const verificationMessageBody = `${contributionsSummary}\n\n---\n\n- Reply YES if you confirm that all of these submissions are in order\n- Reply NO if you did not submit these or you would like to resubmit`;
    const encodedSubject = encodeURIComponent('Confirm your submission');
    const encodedBody = encodeURIComponent(verificationMessageBody);

    let submitterVerification = '#### Submitter Verification\n';
    if (author && author.system && author.id) {
      let verificationLink = '';
      switch (author.system.toLowerCase()) {
        case 'discord':
          verificationLink = `https://discordapp.com/users/${author.id}`;
          break;
        case 'reddit':
          verificationLink = `https://www.reddit.com/message/compose/?to=${author.id}&subject=${encodedSubject}&message=${encodedBody}`;
          break;
        case 'email':
          verificationLink = `mailto:${author.id}?subject=${encodedSubject}&body=${encodedBody}`;
          break;
        default:
          verificationLink = `No verification link available for system: ${author.system}`;
      }
      submitterVerification += `- **System:** ${author.system}\n`;
      submitterVerification += `- **ID:** ${author.id}\n`;
      submitterVerification += `- **[Verify User](${verificationLink})**\n\n`;
    } else {
      submitterVerification += `- Author information is missing or incomplete.\n\n`;
    }

    const submissionReceipt = `\n<details>\n<summary>Submission Receipt</summary>\n\n` + '```json\n' + `${JSON.stringify(submissionContent, null, 2)}
` + '```\n\n</details>';

    const finalComment = submitterVerification + contributionsSummary + submissionReceipt;
    
    console.log(finalComment);

  } catch (error) {
    console.error(`Failed to decode submission file: ${error.message}`);
    process.exit(1);
  }
}

run();
