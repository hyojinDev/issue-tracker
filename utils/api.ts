import { OK, GetRepoIssueProps, CreateIssueProps } from '@typings/api';
import label from '../constants/label';
const { Octokit } = require('@octokit/core');

const octokit = new Octokit({ auth: process.env.APIKEY });
const isOK = (data: any): OK => ({ ok: true, data });
const isNotOK = (data: any): OK => ({ ok: false, data });

export const getAllRepo = async () => {
  try {
    const res = await octokit.request(`GET /users/hyojinDev/repos`);
    if (res.status === 200) {
      return await isOK(res.data)
    };
  } catch (err) {
    return await isNotOK(err || 'Not Found');
  }
};

export const getCurrentRepo = async (repoName: string) => {
  try {
    const res = await octokit.request(`GET /repos/hyojinDev/${repoName}`);
    if (res.status === 200) {
      return await isOK(res.data)
    };
  } catch (err) {
    return await isNotOK(err || 'Not Found');
  }
};

export const getSearchRepo = async (repoName: string) => {
  try {
    const res = await octokit.request(`GET /search/repositories`, {
      q: repoName,
    });
    return await isOK(res.data);
  } catch (err) {
    return await isNotOK(err || 'Not Found');
  }
};

export const getRepoIssue = async ({ repoName, state = 'all' }: GetRepoIssueProps) => {
  try {
    const res = await octokit.request(`GET /repos/hyojinDev/${repoName}/issues?state=${state}`);
    if (res.status === 200) {
      return await isOK(res.data)
    };
  } catch (err) {
    return await isNotOK(err || 'Not Found');
  }
};