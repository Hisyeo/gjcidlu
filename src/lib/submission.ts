import { getQueue, clearQueue } from './queue';
import { QueueAction } from './types';

function formatSubmission(queue: QueueAction[]) {
  const submission: {
    newTerms: any[];
    newEntries: any[];
    votes: any[];
  } = {
    newTerms: [],
    newEntries: [],
    votes: [],
  };

  queue.forEach(action => {
    switch (action.type) {
      case 'NEW_TERM':
        submission.newTerms.push(action.payload);
        break;
      case 'NEW_ENTRY':
        // The author/submitter will be added by the pre-merge workflow
        submission.newEntries.push(action.payload);
        break;
      case 'VOTE':
        // The author/user will be added by the pre-merge workflow
        submission.votes.push(action.payload);
        break;
    }
  });

  return submission;
}

export function generateSubmissionUrl() {
  const queue = getQueue();
  if (queue.length === 0) {
    alert("Submission queue is empty.");
    return;
  }

  const submissionContent = formatSubmission(queue);
  const jsonContent = JSON.stringify(submissionContent, null, 2);

  const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL;
  if (!repoUrl) {
    alert("Error: GitHub repository URL is not configured.");
    console.error("NEXT_PUBLIC_GITHUB_REPO_URL is not set.");
    return;
  }

  const timestamp = new Date().toISOString().replace(/[-:.]/g, "").slice(0, -4);
  const randomStr = Math.random().toString(36).substring(2, 8);
  const filename = `sub.${timestamp}-${randomStr}.json`;
  const filepath = `rsc/submitted/${filename}`;

  const url = `${repoUrl}/new/main?filename=${filepath}&value=${encodeURIComponent(jsonContent)}`;

  // The redirect is now the standard behavior, as dev/prod is handled by the repo owner.
  window.location.href = url;

  clearQueue();
}
