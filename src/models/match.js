class Match {
  #team1;
  #team2;

  teams = [];
  constructor(team1, team2) {
    this.#team1 = team1;
    this.#team2 = team2;

    this.teams = [team1.shortName, team2.shortName];
  }
}

export default Match;