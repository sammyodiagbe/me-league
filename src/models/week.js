class Week {
  #teams = [];
  #games = [];

  get getTeams() {
    return this.#teams;
  }

  get getGames() {
    return this.#games;
  }

  set addGameToWeek(match) {
    this.#games.push(match);
    this.#teams.push(match.getTeam1);
    this.#teams.push(match.getTeam2);
  }
}

export default Week;
