import type { NextPage } from 'next';
import useSWR from 'swr';
import Img from "next/image";
import Head from 'next/head';
import { workflowRuns } from '@/lib/api';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '@/lib/hooks';

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

type RepositoryWorkflowRuns = {
  repo: string;
};

const RepositoryWorkflowRuns = (props: RepositoryWorkflowRuns) => {
  const { data, error } = useSWR(props.repo, workflowRuns);

  return (
    <div style={{ padding: "10px" }}>
      <h2 style={{ color: "white", fontWeight: 'normal', margin: "0 0 5px 0", padding: 0, fontSize: "12px" }}>{props.repo}</h2>
      <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))" }}>
        {error && "Error"}
        {data && data.map(run => <WorkflowRun key={run.id} {...run} />)}
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [repo, setRepo] = useState("");
  const [repos, setRepos] = useLocalStorage<string[]>("repos", []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const onClick = () => setRepos([...repos, repo]);
  const onChange = (e: any) => setRepo(e.target.value);


  return <div>
    <Head>
      <title>hubdash</title>
    </Head>
    <input type="text" placeholder="owner/repo" onChange={onChange} />
    <button onClick={onClick}>Add</button>
    <div>{repos.map(repo => <RepositoryWorkflowRuns key={repo} repo={repo} />)}</div>
  </div>;

};

export default Home;
