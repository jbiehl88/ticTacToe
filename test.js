const gameState = {
    players: ["X", "O"],
    board: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    count: 0,
    // win check for player
    winning: function winCheck (win) {
      win = this.board
      console.log(win.flat())
    },
  };

  function winCheck (win) {
    win = gameState.board
    console.log(win.flat())
  }
 
  winCheck()
  