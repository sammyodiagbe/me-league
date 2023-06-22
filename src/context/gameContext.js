import { createContext, useState } from "react";
import Team from "../models/team";
import { teamsData } from "../helper";
import Match from "../models/match";
import Week from "../models/week";

export const gameContext = createContext();

const GameDataProvider = ({ children }) => {
  const [fixtures, setWeeklyFixtures] = useState(
    new Array(38).fill(new Week())
  );

  const [table, updateTable] = useState({});
  //   const [allFixtures, setAllFixtures] = useState([]);
  const [currentWeek, setCurrentWeek] = useState(0);
  const [started, setStarted] = useState(false);

  const createLeagueTable = () => {
    const tempTable = {};
    for (team of teamsData) {
      const { name, shortName, emblem } = team;
      const tm = new Team(name, emblem, shortName);
      tempTable[shortName] = tm;
    }

    // setting the table

    console.log(tm);
    updateTable(tm);
  };

  const generateLeagueData = () => {
    generateSeasonFixture();
  };

  const generateSeasonFixture = () => {
    const dummyFixtures = [];
    for (let index = 0; index < teamsData.length; index++) {
      const tempTeams = [...teamsData];
      const teamData = tempTeams.splice(index, 1)[0];
      const { name, emblem, shortName } = teamData;
      const team = new Team(name, emblem, shortName);
      for (let ind = 0; ind < tempTeams.length; ind++) {
        const opponentData = tempTeams[ind];
        const { name, emblem, shortName } = opponentData;
        const opponent = new Team(name, emblem, shortName);

        const newMatch = new Match(team, opponent);
        dummyFixtures.push(newMatch);
      }
    }
    generateWeeklyFixtures(dummyFixtures);
  };

  //   generate weekly fixtures

  const generateWeeklyFixtures = (seasonGames) => {
    const games = seasonGames;
    const weeklyFixtures = [...fixtures];
    while (games.length) {
      const game = games.splice(Math.floor(Math.random() * games.length), 1)[0];
      //   console.log(game);
      for (let index = 0; index < 10; index++) {
        const week = weeklyFixtures[index];

        // console.log("getting team 1 name");
        if (
          week.getTeams.includes(game.getTeam1) ||
          week.getTeams.includes(game.getTeam2)
        ) {
          continue;
        } else {
          // the teams have not been added
          week.addGameToWeek = game;
          weeklyFixtures[index] = week;
          break;
        }
      }
    }
    setWeeklyFixtures(weeklyFixtures);
    setStarted(true);
  };

  useEffect(() => {
    createLeagueTable();
  }, []);
  return (
    <gameContext.Provider
      value={{
        generateLeagueData,
        currentWeek,
        setCurrentWeek,
        started,
        setStarted,
        fixtures,
        table,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameDataProvider;
