import { useContext, useEffect } from "react";
import { gameContext } from "../context/gameContext";
import { useState } from "react";
import Game from "./game";

const WeekFixtures = () => {
  const [week, setWeek] = useState(0);
  // const [seasonEnded, setSeasonEnded] = useState(false);
  const gtx = useContext(gameContext);
  const { fixtures } = gtx;

  useEffect(() => {
    const weekInterval = setInterval(() => {
      setWeek((week) => week + 1);
    }, 16000);

    if (week > 0 && week % 37 === 0) {
      clearInterval(weekInterval);
    }
    return () => {
      return clearInterval(weekInterval);
    };
  }, [week]);

  return (
    <div className="fixtures">
      <h2>Week {week}</h2>
      <div>
        {fixtures[0].getGames.map((match, index) => {
          return <Game match={match} key={index} />;
        })}
      </div>
      <div>
        {fixtures[1].getGames.map((match, index) => {
          return <Game match={match} key={index} />;
        })}
      </div>
    </div>
  );
};

export default WeekFixtures;
