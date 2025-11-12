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
    if (process.env.NODE_ENV === 'development') {
      alert("Submission queue is empty.");
    }
    return;
  }

  // In a real app, you'd get the username from an auth system.
  const username = "test-user";
  const submissionContent = formatSubmission(queue, username);

  const jsonContent = JSON.stringify(submissionContent, null, 2);
  // Base64 encode is not strictly necessary for URL value, but good for complex content
  // const encodedContent = btoa(jsonContent);

  const repoUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL;
  if (!repoUrl) {
    if (process.env.NODE_ENV === 'development') {
      alert("Error: GitHub repository URL is not configured.");
      console.error("NEXT_PUBLIC_GITHUB_REPO_URL is not set.");
    }
    return;
  }

  const timestamp = new Date().toISOString().replace(/[-:.]/g, "").slice(0, -4);
  const randomStr = Math.random().toString(36).substring(2, 8);
  const filename = `sub.${timestamp}-${randomStr}.json`;
  const filepath = `rsc/submitted/${filename}`;

  const url = `${repoUrl}/new/main?filename=${filepath}&value=${encodeURIComponent(jsonContent)}`;

  if (process.env.NODE_ENV === 'development') {
    console.log("Submission URL:", url);
    console.log("Submission Content:", jsonContent);
    alert(`In development mode: You would be redirected to GitHub to create a new file named ${filename}. Check the console for the URL and content.`);
  } else {
    window.location.href = url;
  }

  clearQueue();
}
