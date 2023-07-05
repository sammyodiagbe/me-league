import { useEffect } from "react";
import { useState } from "react";

const Game = ({ match }) => {
  const { team1, team2 } = match;
  const [gameTime, setGameTime] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  useEffect(() => {
    let gameInterval = setInterval(() => {
      playGame();
      setGameTime((timer) => timer + 1);
    }, 3000);

    if (gameTime > 0 && gameTime % 4 === 0) {
      // stop the timer and update the team data on the table
      clearInterval(gameInterval);
    }

    return () => {
      clearInterval(gameInterval);
    };
  }, [gameTime]);

  const playGame = () => {
    const randomvalue = Math.floor(Math.random() * 2) + 1;

    if (randomvalue === 1) {
      setHomeScore((score) => score + 1);
    } else {
      setAwayScore((score) => score + 1);
    }
  };

  return (
    <div className="a-game">
      <div className="home">
        <p>{team1.name}</p>
      </div>
      <div className="score-holder">
        <img src={team1.emblem} alt={team1.name} />
        <div className="score-line">
          <span className="score">{homeScore}</span>
          <span className="versus">VS</span>
          <span className="score">{awayScore}</span>
        </div>
        <img src={team2.emblem} alt={team2.emblem} />
      </div>
      <div className="away">{team2.name}</div>
    </div>
  );
};

export default Game;
