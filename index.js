// Game Object

const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }


// Write functions to maniuplate gameState --> maybe even a method?





// put stuff on the screen

const board = document.querySelector('.board')

const newGameButton = document.createElement('button')
newGameButton.classList.add('newGame')


// make them work together