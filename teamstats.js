// TEAM STATS

const team = {
    _players : [{firstName: 'Sandrine', lastName: 'UWUMUKIZA', age: 39}],
    
    _games :[ {opponent: 'Rwanda', teamPoints: 6, opponentPoints: 26}],
   
    get players(){
        return this._players
      } ,
    get games(){
        return this. _games
      } ,
      addPlayer(newFirstName, newLastName, newAge) {
        const player = {
          firstName: newFirstName,
          lastName: newLastName,
          age: newAge
        };
        this._players.push(player);
      },
      addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game  = {
          opponent: newOpponent,
          teamPoints: newTeamPoints,
          opponentPoints: newOpponentPoints
        };
        this._games.push(game );
      }
  }; 
  team.addGame('Titans',100,98)
  console.log(team.games);



//     addPlayer(newFirstName, newLastName, newAge) {
//       const newPlayer = {
//         firstName: newFirstName,
//         lastName: newLastName,
//         age: newAge
//       };
//       this._players.push(newPlayer);
//     },
//     addGame(newOpponent, newTeamPoints, newOpponentPoints) {
//       const newGame = {
//         opponent: newOpponent,
//         teamPoints: newTeamPoints,
//         opponentPoints: newOpponentPoints
//       };
//       this._games.push(newGame);
//     }
//   };
  
//   // Adding players
//   team.addPlayer('Michael', 'Jordan', 38);
//   team.addPlayer('LeBron', 'James', 36);
//   team.addPlayer('Kobe', 'Bryant', 41);
  
//   console.log(team.players);
  
//   // Adding a game
//   team.addGame('Titans', 100, 98);
  
//   console.log(team.games);
  