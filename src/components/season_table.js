import { useContext } from "react";
import { gameContext } from "../context/gameContext";
import TeamEntry from "./team_table";
import _ from "lodash";

const SeasonTable = () => {
  const gtx = useContext(gameContext);
  const { table } = gtx;

  const renderTable = _.toArray(table)
    .sort((a, b) => a - b)
    .map((team, index) => {
      return <TeamEntry team={team} key={index} />;
    });

  return (
    <div className="season-table">
      <h1>table</h1>
      {renderTable}
    </div>
  );
};

export default SeasonTable;
