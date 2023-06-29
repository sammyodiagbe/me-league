const TeamEntry = ({ team, position }) => {
  const {
    getName,
    getEmblem,
    gamePlayed,
    won,
    drawn,
    lost,
    goalFor,
    goalAgainst,
    goalDone,
    points,
  } = team;
  return (
    <div className="team-table-entry">
      <div className="team-name-emblem">
        <span className="pos">{position}</span>
        <img src={getEmblem} alt={getName} />
        <span className="team-name">{getName}</span>
      </div>
      <div className="team-details">
        <span className="detail">{gamePlayed}</span>
        <span className="detail">{won}</span>
        <span className="detail">{drawn}</span>
        <span className="detail">{lost}</span>
        <span className="detail">{goalFor}</span>
        <span className="detail">{goalAgainst}</span>
        <span className="detail">{goalDone}</span>
        <span className="detail">{points}</span>
      </div>
    </div>
  );
};

export default TeamEntry;
