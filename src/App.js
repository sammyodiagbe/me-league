import "./App.css";
import { useContext } from "react";
import { gameContext } from "./context/gameContext";

function App() {
  const gctx = useContext(gameContext);
  const { generateLeagueData } = gctx;
  return (
    <div className="App">
      <div className="trigger-container" style={{}}>
        <button className="trigger" onClick={generateLeagueData}>
          Generate league data
        </button>
      </div>
    </div>
  );
}

export default App;
