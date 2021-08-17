import Fetch from "./Fetch";
import { RepoMenu } from "./RepoMenu";

export default function UserRepositories({ login, selectedRepo, onSelect = (f) => f }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => {
        return <RepoMenu repositories={data} login={login} selected={selectedRepo} onSelect={onSelect} />;
      }}
    />
  );
}
