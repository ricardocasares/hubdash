import useSWR from "swr";
import { workflowRuns } from "@/lib/api";
import { useGlobalState } from "@/hooks/useGlobalState";

export type UseWorkflowRunsOptions = {
  repo: string;
  limit?: string;
  branch?: string;
  refreshInterval?: number;
};

export function useWorkflowRuns({
  repo,
  limit,
  branch,
  refreshInterval = 5,
}: UseWorkflowRunsOptions) {
  const {
    state: { token },
  } = useGlobalState();
  const { data, error } = useSWR([repo, branch, limit, token], workflowRuns, {
    refreshInterval,
    revalidateOnFocus: false,
  });

  return { data, error, loading: !data && !error };
}
