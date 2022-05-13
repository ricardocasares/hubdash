import { WorkflowRun } from "@/components/WorkflowRun";
import { useGlobalState } from "@/hooks/useGlobalState";
import { useWorkflowRuns } from "@/hooks/useWorkflowRuns";

export type RepositoryWorkflowRuns = {
  repo: string;
};

export const RepositoryWorkflowRuns = (props: RepositoryWorkflowRuns) => {
  const { dispatch } = useGlobalState();
  const { data, error, loading } = useWorkflowRuns({ repo: props.repo, refreshInterval: 60000 });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "10px" }}>
      <h2 style={{ color: "white", fontWeight: 'normal', margin: "0 0 5px 0", padding: 0, fontSize: "12px" }}>{props.repo} <button onClick={() => dispatch({ type: "DEL_REPO", payload: props.repo })}>x</button></h2>
      <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))" }}>
        {error && "Error"}
        {data && data.map(run => <WorkflowRun key={run.id} {...run} />)}
      </div>
    </div>
  );
};
