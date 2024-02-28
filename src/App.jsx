import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targetTime={1} />
        <TimeChallenge title="Medium" targetTime={5} />
        <TimeChallenge title="Hard" targetTime={10} />
        <TimeChallenge title="Very Hard" targetTime={15} />
      </div>
    </>
  );
}

export default App;
