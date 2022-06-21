import { OK, GetRepoIssueProps, CreateIssueProps } from '@typings/api';
import label from '../constants/label';
const { Octokit } = require('@octokit/core');

const octokit = new Octokit({ auth: process.env.APIKEY });
const isOK = (data: any): OK => ({ ok: true, data });

export const getAllRepo = async () => {
  const res = await octokit.request(`GET /users/hyojinDev/repos`);
  return isOK(res);
};

export const getCurrentRepo = async (repoName: string) => {
  const res = await octokit.request(`GET /repos/hyojinDev/${repoName}`);
  return isOK(res);
};

export const getRepoIssue = async ({ repoName, state = 'all' }: GetRepoIssueProps) => {
  const res = await octokit.request(`GET /repos/hyojinDev/${repoName}/issues?state=${state}`);
  return isOK(res);
};