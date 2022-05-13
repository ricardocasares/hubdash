const API = "https://api.github.com";

async function fetchOk<T>(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json() as Promise<T>;
}

export type WorkflowRunsOptions = {
  repo: string;
  limit?: string;
  token?: string;
  branch?: string;
};

export async function workflowRuns(
  repo: string,
  branch?: string,
  limit?: string,
  token?: string
) {
  const url = new URL(`/repos/${repo}/actions/runs`, API);
  const headers = new Headers();

  url.searchParams.set("page", "1");
  url.searchParams.set("per_page", limit || "5");

  if (branch) url.searchParams.set("branch", branch);
  if (token) headers.set("Authorization", `Bearer ${token}`);

  return fetchOk<RepositoryWorkflowRuns>(url.toString(), { headers }).then(
    ({ workflow_runs = [] }) =>
      workflow_runs.map(
        ({
          id,
          name,
          head_branch: branch,
          actor: { login: actor, avatar_url: avatar },
          status,
          conclusion,
        }) => ({ id, name, actor, avatar, branch, status, conclusion })
      )
  );
}

type WorkflowRun = {
  id: number;
  name: string;
  status: string;
  conclusion: string;
  head_branch: string;
  actor: {
    login: string;
    avatar_url: string;
  };
};

type RepositoryWorkflowRuns = {
  workflow_runs: WorkflowRun[];
};
