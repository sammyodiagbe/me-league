import { useContext } from "react";
import { gameContext } from "../context/gameContext";

const SeasonTable = () => {
  const gtx = useContext(gameContext);

  const { table } = gtx;
  return <div className="season-table"></div>;
};

export default SeasonTable;
