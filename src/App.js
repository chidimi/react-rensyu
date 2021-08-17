import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import GitHubUser from "./GitHub";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";
import List from './List'
import { client, query } from './graphql'

function App() {
  const [login, setLogin] = useState("");
  const [repo, setRepo] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!login) return
    client.request(query, { "login" : login })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error)
  }, [login])

  const handleSearch = login => {
    if (login) return setLogin(login);
    setLogin('');
    setRepo('');
  };

  if (!login) return <SearchForm value={login} onSearch={handleSearch} />

  return (
    <>
      <SearchForm value={login} onSearch={handleSearch} />
      <GitHubUser login={login} />
      <UserRepositories
        login={login}
        onSelect={setRepo}
      />
      {repo && <RepositoryReadme login={login} repo={repo} />}
      {userData ? <List data={userData.repositories?.nodes} renderItem={repo => <span>{repo.name}</span>} renderEmpty={<span>nothing found</span>}　/> : <p>loading...</p>}
    </>
  );
}

export default App;
