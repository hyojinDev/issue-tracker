export type OK = {
  ok: boolean;
  data: any;
};

export type GetRepoIssueProps = {
  repoName: string,
  state: string
};

export type CreateIssueProps = {
  title: string,
  body: string,
  assignees?: string[] | null,
  milestone?: string | number | null,
  labels?: string[] | null
};