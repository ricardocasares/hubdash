import { TrashIcon } from '@radix-ui/react-icons';
import { styled } from "@/css";
import { Code } from '@/components/Code';
import { Stack } from "@/components/Stack";
import { WorkflowRun } from "@/components/WorkflowRun";
import { useGlobalState } from "@/hooks/useGlobalState";
import { useWorkflowRuns } from "@/hooks/useWorkflowRuns";

const Button = styled('button', {
  color: "inherit",
  border: "none",
  padding: 0,
  margin: 0,
  appearance: "none",
  background: "inherit",
  cursor: "pointer"
});

export type RepositoryWorkflowRuns = {
  repo: string;
};

export const RepositoryWorkflowRuns = (props: RepositoryWorkflowRuns) => {
  const { dispatch } = useGlobalState();
  const { data, error, loading } = useWorkflowRuns({ repo: props.repo, refreshInterval: 30000 });

  const title = error ? `Couldn't load ${props.repo}` : loading ? `Loading ${props.repo}...` : props.repo;

  return (
    <Stack v>
      <Stack h pad gap>
        <Button onClick={() => dispatch({ type: "DEL_REPO", payload: props.repo })}>
          <TrashIcon />
        </Button>
        <Code>{title}</Code>
      </Stack>

      {data &&
        <Stack h fill gap>
          {data.map(run => <WorkflowRun key={run.id} {...run} />)}
        </Stack>
      }

      {loading &&
        <Stack h gap fill>
          {Array(5).fill(1).map((_, idx) => <WorkflowRun key={idx} name="Loading..." avatar="https://avatars.githubusercontent.com/u/87520916?s=200&v=4" actor="username" status="queued" branch="branch" />)}
        </Stack>
      }
    </Stack>
  );
};
