import axios from 'axios';
import { GITHUB_ACCESS_TOKEN } from '@/lib/env';

const GITHUB_API_URL = 'https://api.github.com/repos'; // Corrected endpoint for a single repo

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  forks_count: number;
  stargazers_count: number;
  [key: string]: any;
}

export async function fetchRepository(owner: string, repositoryName: string): Promise<Repository> {
  try {
    const response = await axios.get<Repository>(`${GITHUB_API_URL}/${owner}/${repositoryName}`, {
      headers: {
        Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repository:', error);
    throw new Error('Failed to fetch repository');
  }
}
