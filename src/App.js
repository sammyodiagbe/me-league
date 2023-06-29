import { useContext } from "react";
import { gameContext } from "./context/gameContext";
import GameScreen from "./screens/game_screen";

function App() {
  const gctx = useContext(gameContext);

  return (
    <div className="App">
      <GameScreen />
    </div>
  );
}

export default App;
