import React, { useState } from "react";
import SearchForm from "./SearchForm";
import GitHubUser from "./GitHub";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";


function App() {
  const [login, setLogin] = useState("chidimi");
  const [repo, setRepo] = useState("react-rensyu");
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
      <UserRepositories
        login={login}
        selectedRepo={repo}
        onSelect={setRepo}
      />
      <RepositoryReadme login={login} repo={repo} />
    </>
  );
}

export default App;
