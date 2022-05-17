import { useGlobalState } from '@/hooks/useGlobalState';
import { RepositoryWorkflowRuns } from '@/components/RepositoryWorkflowRuns';

export const Repositories = () => {
  const { state: { repos } } = useGlobalState();

  return <div>{repos.map(repo => <RepositoryWorkflowRuns key={repo} repo={repo} />)}</div>;
};

export default Repositories;