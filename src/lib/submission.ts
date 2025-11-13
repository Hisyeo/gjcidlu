import { getQueue, clearQueue } from './queue';
import { QueueAction } from './types';

type UserSystem = 'Email' | 'Discord';

function formatSubmission(queue: QueueAction[], userSystem: UserSystem, userId: string) {
  const submission = {
    author: {
      system: userSystem,
      id: userId,
    },
    newTerms: [] as any[],
    newEntries: [] as any[],
    votes: [] as any[],
  };

  queue.forEach(action => {
    switch (action.type) {
      case 'NEW_TERM':
        submission.newTerms.push(action.payload);
        break;
      case 'NEW_ENTRY':
        submission.newEntries.push(action.payload);
        break;
      case 'VOTE':
        submission.votes.push(action.payload);
        break;
    }
  });

  return submission;
}

function generateCommitDetails(queue: QueueAction[], userSystem: UserSystem, userId: string) {
    const counts = {
        terms: queue.filter(a => a.type === 'NEW_TERM').length,
        entries: queue.filter(a => a.type === 'NEW_ENTRY').length,
        votes: queue.filter(a => a.type === 'VOTE').length,
    };

    const title = `feat: New submission from ${userSystem} user ${userId}`;

    const receiptItems = queue.map(action => {
        switch (action.type) {
            case 'NEW_TERM':
                return `- Term '${action.payload.id.split('-')[0]}'`;
            case 'NEW_ENTRY':
                return `- Translation '${action.payload.id}' for '${action.payload.termId}'`;
            case 'VOTE':
                return `- ${action.payload.voteType} vote for '${action.payload.entryId}' on term '${action.payload.termId}'`;
        }
    }).join('\n');

    const emailBody = `Thank you for your ${counts.votes} votes, ${counts.entries} entries, and ${counts.terms} terms!\n\nHere is a receipt of what you have submitted:\n${receiptItems}\n\nReply YES if you confirm these votes, entries and terms to be valid.\nReply NO if you would like to start over.\nIf we don't receive a reply in a timely fashion, you may become banned from using email verification.`;

    const verificationLink = userSystem === 'Email'
        ? `mailto:${userId}?subject=Confirm Your Submission&body=${encodeURIComponent(emailBody)}`
        : `https://discord.com/users/${userId}`;

    const body = `Submission from ${userSystem} user: ${userId}\n\nReviewer Action: Click to verify user -> ${verificationLink}\n\n---\n\nSubmission Receipt:\n${receiptItems}`;

    return { title, body };
}


export function generateSubmissionUrl(queue: QueueAction[], userSystem: UserSystem, userId: string) {
  if (queue.length === 0) {
    alert("Submission queue is empty.");
    return;
  }

  const submissionContent = formatSubmission(queue, userSystem, userId);
  const jsonContent = JSON.stringify(submissionContent, null, 2);
  const { title, body } = generateCommitDetails(queue, userSystem, userId);

  const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL;
  if (!repoUrl) {
    alert("Error: GitHub repository URL is not configured.");
    return;
  }

  const timestamp = new Date().toISOString().replace(/[-:.]/g, "").slice(0, -4);
  const randomStr = Math.random().toString(36).substring(2, 8);
  const filename = `sub.${timestamp}-${randomStr}.json`;
  const filepath = `rsc/submitted/${filename}`;

  const url = `${repoUrl}/new/main?filename=${filepath}&value=${encodeURIComponent(jsonContent)}&message=${encodeURIComponent(title)}&description=${encodeURIComponent(body)}`;

  window.location.href = url;

  clearQueue();
}
