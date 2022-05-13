import Head from 'next/head';
import type { NextPage } from 'next';
import { useOnMount } from '@/hooks/useOnMount';
import { FormAddRepository } from "@/components/FormAddRepository";
import { RepositoryWorkflowRuns } from '@/components/RepositoryWorkflowRuns';
import { useGlobalState } from '@/hooks/useGlobalState';

const Home: NextPage = () => {
  const [mounted] = useOnMount();
  const { state: { repos } } = useGlobalState();

  if (!mounted) return null;


  return <div>
    <Head>
      <title>hubdash</title>
    </Head>
    <FormAddRepository />
    <div>{repos.map(repo => <RepositoryWorkflowRuns key={repo} repo={repo} />)}</div>
  </div>;

};

export default Home;
