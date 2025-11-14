// src/lib/github.ts
import { Term, Entry, Vote } from './types';

interface SubmissionFile {
  content: string;
  prUrl?: string;
}

export interface SubmissionContent {
  newTerms?: Term[];
  newEntries?: Entry[];
  votes?: Vote[];
  author?: {
    system: string;
    id: string;
  };
  prUrl?: string;
}

async function fetchGitHubAPI(url: string) {
  const response = await fetch(url, {
    headers: {
      // Authorization: `token ${process.env.GITHUB_TOKEN}`, // This would be needed for private repos or to avoid rate limits
    },
  });
  if (!response.ok) {
    // If the resource is not found, it's not a critical error in our case
    if (response.status === 404) {
      return null;
    }
    throw new Error(`GitHub API request failed: ${response.status} ${response.statusText} for ${url}`);
  }
  return response.json();
}

export async function getPendingSubmissions(repoUrl: string): Promise<SubmissionContent[]> {
  if (!repoUrl) {
    console.log("[github.ts] GITHUB_REPO_URL not set, skipping pending submissions.");
    return [];
  }

  const match = repoUrl.match(/github\.com\/([^/]+\/[^/]+)/);
  const repoPath = match ? match[1].replace('.git', '') : repoUrl;
  const [owner, repo] = repoPath.split('/');

  if (!owner || !repo) {
      console.error(`[github.ts] Invalid repoUrl format: ${repoUrl}`);
      return [];
  }
  
  const submissions: SubmissionFile[] = [];

  try {
    // 1. Get open PRs
    const prs = await fetchGitHubAPI(`https://api.github.com/repos/${owner}/${repo}/pulls?state=open`);

    // 2. For each PR, get files and look for submissions
    if (prs) {
      for (const pr of prs) {
        const prFiles = await fetchGitHubAPI(`https://api.github.com/repos/${owner}/${repo}/pulls/${pr.number}/files`);
        if (prFiles) {
          for (const file of prFiles) {
            if (file.filename.startsWith('rsc/submitted/') && file.filename.endsWith('.json')) {
              const fileContent = await fetchGitHubAPI(file.contents_url);
              if (fileContent) {
                const decodedContent = Buffer.from(fileContent.content, 'base64').toString('utf-8');
                submissions.push({
                  content: decodedContent,
                  prUrl: pr.html_url,
                });
              }
            }
          }
        }
      }
    }

    // 3. Get submissions from main branch's rsc/submitted
    const mainSubmittedFiles = await fetchGitHubAPI(`https://api.github.com/repos/${owner}/${repo}/contents/rsc/submitted`);
    if (Array.isArray(mainSubmittedFiles)) {
      for (const file of mainSubmittedFiles) {
        if (file.name.endsWith('.json')) {
          const fileContent = await fetchGitHubAPI(file.url);
          if (fileContent && fileContent.content) {
            const decodedContent = Buffer.from(fileContent.content, 'base64').toString('utf-8');
            if (!submissions.some(s => s.content === decodedContent)) {
              submissions.push({
                content: decodedContent,
              });
            }
          }
        }
      }
    }
  } catch (error) {
    console.error("Failed to fetch pending submissions from GitHub:", error);
    // Return empty array on error to prevent crashing the app
    return [];
  }

  return submissions.map(s => {
    try {
      return { ...JSON.parse(s.content), prUrl: s.prUrl };
    } catch (e) {
      console.error("Failed to parse submission content:", e);
      return null;
    }
  }).filter((s): s is SubmissionContent => s !== null);
}