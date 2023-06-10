import { createContext, useState } from "react";
import Team from "../models/team";
import { teamsData } from "../helper";
import Match from "../models/match";

export const gameContext = createContext();

const GameDataProvider = ({ children }) => {
  const [fixtures, setFixtures] = useState([]);
  const generateLeagueData = () => {
    generateFirstHalfOfSeasonGames();
  };

  const generateFirstHalfOfSeasonGames = () => {
    const dummyFixtures = [];
    for (let index = 0; index < teamsData.slice(0, 2).length; index++) {
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

    console.log(dummyFixtures);
  };
  return (
    <gameContext.Provider
      value={{
        generateLeagueData,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameDataProvider;
