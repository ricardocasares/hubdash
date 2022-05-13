// TODO:
// Parameterize all queries
const API = "https://api.github.com/repos/%/actions/runs?page=1&per_page=5";

async function get<T>(url: string, opt?: RequestInit) {
  const res = await fetch(url, opt);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json() as Promise<T>;
}

export const workflowRuns = (repo: string) =>
  get<RepositoryWorkflowRuns>(API.replace("%", repo), {
    headers: {
      // TODO:
      // Include API Token here
    },
  }).then(({ workflow_runs = [] }) =>
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
