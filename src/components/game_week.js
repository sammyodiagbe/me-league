import { useContext, useEffect } from "react";
import { gameContext } from "../context/gameContext";
import { useState } from "react";
import Game from "./game";

const WeekFixtures = () => {
  const [weekTimer, setWeekTimer] = useState(0);
  const [seasonEnded, setSeasonEnded] = useState(false);
  const gtx = useContext(gameContext);
  let gameInterval;
  const { fixtures } = gtx;

  useEffect(() => {
    if (!seasonEnded) {
      gameInterval = setInterval(() => {
        setWeekTimer((currenttime) => currenttime + 1);
      }, 15000);
    }

    return () => {
      clearInterval(gameInterval);
      // this is where season has ended
    };
  }, []);

  useEffect(() => {
    if (weekTimer > 0 && weekTimer % 19 === 0) {
      // the season has ended
      clearInterval(gameInterval);
      setSeasonEnded(true);
    }
  }, [weekTimer]);
  const week = fixtures[weekTimer];

  console.log(week);
  const renderWeekFixture = week.getGames.map((match, index) => {
    return <Game match={match} key={index} />;
  });
  return <div className="fixtures">{renderWeekFixture}</div>;
};

export default WeekFixtures;
