import Img from "next/image";

export type WorkflowRun = {
  name: string;
  actor: string;
  avatar: string;
  branch: string;
  status: string;
  conclusion: string;
};

export function WorkflowRun(props: WorkflowRun) {
  return <div className={`card ${props.status} ${props.conclusion}`}>
    <Img src={props.avatar} alt={props.actor} width="20" height="20" />
    <p>{props.name}</p>
    <p>{props.branch}</p>
    <p>status: {props.status}</p>
    <p>conclusion: {props.conclusion}</p>
  </div>;
}
