import { useEffect } from "react";
import { useState } from "react";

const Game = ({ match }) => {
  const { getTeam1, getTeam2 } = match;
  const [gameTime, setGameTime] = useState(0);

  useEffect(() => {
    const gameInt = setInteval(() => {
      setGameTime((timer) => timer + 1);
    }, 3000);

    return () => {
      clearInterval(gameInt);
    };
  }, []);

  useEffect(() => {
    if (gameTime > 0 && gameTime % 5 === 0) {
      // stop the timer and update the team data on the table
    }
  }, [gameTime]);

  return <div className="a-game"></div>;
};

export default Game;
