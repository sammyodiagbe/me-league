import { useContext, useEffect } from "react";
import { gameContext } from "../context/gameContext";
import { useState } from "react";
import Game from "./game";

const WeekFixtures = () => {
  const [weekTimer, setWeekTimer] = useState(1);
  const [seasonEnded, setSeasonEnded] = useState(false);
  const gtx = useContext(gameContext);
  const { fixtures } = gtx;

  console.log(fixtures);

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
  const week = fixtures[weekTimer - 1];

  console.log(week);
  const renderWeekFixture = week.getGames.map((match, index) => {
    return <Game match={match} key={index} />;
  });
  return <div className="fixtures">{renderWeekFixture}</div>;
};

export default WeekFixtures;
