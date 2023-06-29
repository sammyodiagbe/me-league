import { useContext } from "react";
import { gameContext } from "../context/gameContext";
import TeamEntry from "./team_table";

const SeasonTable = () => {
  const gtx = useContext(gameContext);
  console.log(gtx);
  const { table } = gtx;

  const renderTable = Array.from(table)
    .sort((a, b) => a.getName && b.points - a.points)
    .map((team, index) => {
      return <TeamEntry team={team} key={index} />;
    });
  return <div className="season-table">{renderTable}</div>;
};

export default SeasonTable;
