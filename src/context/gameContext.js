import { createContext } from "react";

const gameContext = createContext();

const GameDataProvider = ({ children }) => {
  return <gameContext.Provider>{children}</gameContext.Provider>;
};

export default GameDataProvider;
