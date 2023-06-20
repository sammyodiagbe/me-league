import "./App.css";
import { useContext } from "react";
import { gameContext } from "./context/gameContext";
import Match from "./components/match";

function App() {
  const gctx = useContext(gameContext);

  return (
    <div className="App">
      <div className="trigger-container" style={{}}>
        <button className="start-simulation">Start Simulation</button>
      </div>
    </div>
  );
}

export default App;
