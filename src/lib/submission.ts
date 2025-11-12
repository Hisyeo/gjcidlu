import { getQueue, clearQueue } from './queue';
import { QueueAction } from './types';

function formatSubmission(queue: QueueAction[], username: string) {
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
        submission.newEntries.push({
          ...action.payload,
          submitter: username,
        });
        break;
      case 'VOTE':
        submission.votes.push({
          ...action.payload,
          user: username,
        });
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

  // In a real app, you'd get the username from an auth system.
  const username = "test-user";
  const submissionContent = formatSubmission(queue, username);

  const jsonContent = JSON.stringify(submissionContent, null, 2);
  const encodedContent = btoa(jsonContent); // Base64 encode

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

  // For debugging:
  console.log("Submission URL:", url);
  console.log("Submission Content:", jsonContent);

  // To prevent accidental submissions during development, we'll just log it.
  // In production, you would use: window.location.href = url;
  alert(`In a real app, you would be redirected to GitHub to create a new file named ${filename}. Check the console for the URL and content.`);

  clearQueue();
}
