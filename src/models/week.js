class Week {
  games = [];
  teams = new Set();
  getGames() {
    return this.games;
  }

  addGameToWeek(game) {
    this.games.push(game);
  }

  addToTeams(team) {
    this.teams.add(team);
  }
}

export default Week;
