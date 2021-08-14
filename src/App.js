/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import GitHubUser from "./GitHub";
import FakeList from "./FakeList";

function App() {
  return (
    <>
      <GitHubUser login="chidimi" />
      <div>
        <FakeList />
      </div>
    </>
  );
}

export default App;
