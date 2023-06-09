import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import { gameContext } from "./context/gameContext";

function App() {
  const gameContext = useContext(gameContext);
  return (
    <div className="App">
      <div className="trigger-container" style={{}}>
        <button className="trigger">Generate league data</button>
      </div>
    </div>
  );
}

export default App;
