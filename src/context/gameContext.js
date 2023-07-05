import { createContext, useState, useEffect } from "react";
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
    for (const team of teamsData) {
      const { name, shortName, emblem } = team;
      const tm = new Team(name, emblem, shortName);
      tempTable[shortName] = tm;
    }

    // setting the table

    updateTable(tempTable);
  };

  const generateLeagueData = () => {
    generateSeasonFixture();
  };

  const generateSeasonFixture = () => {
    // create a dummy array
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
    console.table(dummyFixtures.slice(0, 20));
    generateWeeklyFixtures(dummyFixtures);
  };

  //   generate weekly fixtures

  const generateWeeklyFixtures = (seasonGames) => {
    const games = [...seasonGames];
    const weeklyFixtures = Array.from({ length: 38 }, () => new Week());

    // generating league data

    while (games.length) {
      let match = games.splice(Math.random() * games.length, 1)[0];

      for (let index = 0; index < 38; index++) {
        let week = weeklyFixtures[index];
        if (
          !week.teams.has(match.team1.name) &&
          !week.teams.has(match.team2.name)
        ) {
          week.addGameToWeek(match);
          week.addToTeams(match.team1.name);
          week.addToTeams(match.team2.name);
          break;
        } else {
          continue;
        }
      }
    }

    console.log(weeklyFixtures);
    setWeeklyFixtures(weeklyFixtures);
    setStarted(true);
  };

  useEffect(() => {
    createLeagueTable();
    generateLeagueData();
  }, []);

  return (
    <gameContext.Provider
      value={{
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
