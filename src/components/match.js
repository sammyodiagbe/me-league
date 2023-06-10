const Match = ({ match }) => {
  const { getFirstTeam, getSecondTeam } = match;

  const { getShortName, getEmblem, getName } = getFirstTeam;
  const {
    getShortName: t2ShortName,
    getEmblem: t2Emblem,
    getName: t2Name,
  } = getSecondTeam;
  const {} = getSecondTeam;
  return (
    <div className="a-match">
      <div className="team">
        <div className="emblem">
          <img src={getEmblem} alt={getName} />
        </div>
        <div className="team-name">{getShortName}</div>
      </div>
      <div className="score">
        <span>0</span> - <span>0</span>
      </div>
      <div className="team">
        <div className="emblem">
          <img src={t2Emblem} alt={t2Name} />
        </div>
        <div className="team-name">{t2ShortName}</div>
      </div>
    </div>
  );
};

export default Match;
