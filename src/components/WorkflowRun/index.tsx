import Img from "next/image";
import css from "./styles.module.css";

export type WorkflowRun = {
  name: string;
  actor: string;
  avatar: string;
  branch: string;
  status: string;
  conclusion: string;
};

export function WorkflowRun(props: WorkflowRun) {
  const status = css[props.status];
  const conclusion = css[props.conclusion];
  const completed = props.status === "completed";

  return <div className={`${css.card} ${status} ${conclusion}`}>
    <Img src={props.avatar} alt={props.actor} width="20" height="20" />
    <p>{props.name}</p>
    <p>{props.branch}</p>
    <p>{!completed ? props.status : props.conclusion}</p>
  </div>;
}
