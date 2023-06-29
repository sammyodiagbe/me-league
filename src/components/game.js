import { useEffect } from "react";
import { useState } from "react";

const Game = ({ match }) => {
  const { getTeam1, getTeam2, getTeam1Emblem, getTeam2Emblem } = match;
  const [gameTime, setGameTime] = useState(0);
  const [scores, setScore] = useState([0, 0]);

  useEffect(() => {
    const gameInt = setInterval(() => {
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

  return (
    <div className="a-game">
      <div className="home">
        <img src={getTeam1Emblem} alt={getTeam1} />
        <span className="team-name">{getTeam1}</span>
      </div>
      <div className="score-holder">
        <span className="score">{scores[0]}</span>
        <span className="versus">VS</span>
        <span className="score">{scores[1]}</span>
      </div>
      <div className="home">
        <img src={getTeam2Emblem} alt={getTeam2} />
        <span className="team-name">{getTeam2}</span>
      </div>
    </div>
  );
};

export default Game;
