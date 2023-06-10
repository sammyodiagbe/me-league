import "./App.css";
import { useContext } from "react";
import { gameContext } from "./context/gameContext";
import Match from "./components/match";

function App() {
  const gctx = useContext(gameContext);
  const { generateLeagueData, fixtures, currentWeek, started } = gctx;

  console.log(fixtures[0]);
  const renderFixture = started ? (
    fixtures[currentWeek].getGames.map((match, index) => {
      return <Match key={index} match={match} />;
    })
  ) : (
    <button className="trigger" onClick={generateLeagueData}>
      Start League
    </button>
  );
  return (
    <div className="App">
      <div className="trigger-container" style={{}}>
        {renderFixture}
      </div>
    </div>
  );
}

export default App;
