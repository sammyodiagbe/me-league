import { createContext } from "react";

export const gameContext = createContext();

const GameDataProvider = ({ children }) => {
  const generateLeagueData = () => {};
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
