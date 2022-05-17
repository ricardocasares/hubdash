import css from "./styles.module.css";
import { WorkflowRun } from "@/components/WorkflowRun";
import { useGlobalState } from "@/hooks/useGlobalState";
import { useWorkflowRuns } from "@/hooks/useWorkflowRuns";

export type RepositoryWorkflowRuns = {
  repo: string;
};

export const RepositoryWorkflowRuns = (props: RepositoryWorkflowRuns) => {
  const { dispatch } = useGlobalState();
  const { data, error, loading } = useWorkflowRuns({ repo: props.repo, refreshInterval: 30000 });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.repo}>
      <h2>{props.repo} <button onClick={() => dispatch({ type: "DEL_REPO", payload: props.repo })}>x</button></h2>
      <div className={css.runs}>
        {error && "Error"}
        {data && data.map(run => <WorkflowRun key={run.id} {...run} />)}
      </div>
    </div>
  );
};
