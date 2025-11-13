import { getQueue, clearQueue } from './queue';
import { QueueAction } from './types';

type UserSystem = 'Email' | 'Discord';

function formatSubmission(queue: QueueAction[], userSystem: UserSystem, userId: string) {
  const submission = {
    version: 2, // Add version field
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

export function generateSubmissionUrl(queue: QueueAction[], userSystem: UserSystem, userId: string) {
  if (queue.length === 0) {
    alert("Submission queue is empty.");
    return;
  }

  const submissionContent = formatSubmission(queue, userSystem, userId);
  const jsonContent = JSON.stringify(submissionContent, null, 2);

  const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL;
  if (!repoUrl) {
    alert("Error: GitHub repository URL is not configured.");
    return;
  }

  const timestamp = new Date().toISOString().replace(/[-:.]/g, "").slice(0, -4);
  const randomStr = Math.random().toString(36).substring(2, 8);
  const filename = `sub.${timestamp}-${randomStr}.json`;
  const filepath = `rsc/submitted/${filename}`;

  // Generic commit message for the new file
  const commitMessage = `feat: Add new submission from ${userSystem} user ${userId}`;

  const url = `${repoUrl}/new/main?filename=${filepath}&value=${encodeURIComponent(jsonContent)}&message=${encodeURIComponent(commitMessage)}`;

  window.location.href = url;

  clearQueue();
}
