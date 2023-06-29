class Match {
  #team1;
  #team2;
  #scores = { t1: 0, t2: 0 };
  constructor(team1, team2) {
    this.#team1 = team1;
    this.#team2 = team2;
  }

  get getTeam1() {
    return this.#team1.getName;
  }

  get getTeam2() {
    return this.#team2.getName;
  }

  get getTeam1Emblem() {
    return this.#team1.getEmblem;
  }

  get getTeam2Emblem() {
    return this.#team2.getEmblem;
  }
  get getFirstTeam() {
    return this.#team1;
  }

  get getSecondTeam() {
    return this.#team2;
  }
}

export default Match;
