import { useContext } from "react";
import { gameContext } from "../context/gameContext";
import { useState } from "react";

const GameWeek = () => {
  const [weekTimer, setWeekTimer] = useState(1);
  const [seasonEnded, setSeasonEnded] = useState(false);
  useEffect(() => {
    let weekGameInterval;
    if (!seasonEnded) {
      weekGameInterval = setInterval(() => {
        setWeekTimer((currenttime) => currenttime + 1);
      }, 15000);
    }

    return () => {
      clearInterval(weekGameInterval);
      // this is where season has ended
    };
  }, []);

  useEffect(() => {
    if (weekTimer > 0 && weekTimer % 20 === 0) {
      // the season has ended
    }
  }, [weekTimer]);
  return (
    <div className="game">
      <div className="games"></div>
      <div className="table"></div>
    </div>
  );
};

export default GameWeek;
