import { useFetch } from "./useFetch";

// eslint-disable-next-line react/prop-types
export default function GitHubUser({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <h1>Loading...</h1>;
  if (!data) return null;

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.name}</p>}
      </div>
    </div>
  );
}
