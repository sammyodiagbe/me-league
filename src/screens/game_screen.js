import WeekFixtures from "../components/game_week";
import SeasonTable from "../components/season_table";

const GameScreen = () => {
  return (
    <div className="game-screen">
      <WeekFixtures />
      <SeasonTable />
    </div>
  );
};

export default GameScreen;
