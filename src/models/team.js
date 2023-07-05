class Team {
  name;
  emblem;
  shortName;
  gamePlayed = 0;
  won = 0;
  drawn = 0;
  lost = 0;
  goalFor = 0;
  goalAgainst = 0;
  goalDone = 0;
  points = 0;
  constructor(name, emblem, shortName) {
    this.name = name;
    this.emblem = emblem;
    this.shortName = shortName;
  }
}

export default Team;
