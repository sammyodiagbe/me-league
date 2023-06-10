class Match {
  #team1;
  #team2;
  #scores = { t1: 0, t2: 0 };
  constructor(team1, team2) {
    this.#team1 = team1;
    this.#team2 = team2;
  }

  get getTeam1() {
    return this.#team1.getShortName;
  }

  get getTeam2() {
    return this.#team2.getShortName;
  }
}

export default Match;
