// Game Object

const gameState = {
  players: ["X", "O"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  count: 0,
};

const board = document.querySelector(".board");
const cell = document.querySelector(".cell");
// const ticTacBoard = ['', '', '', '', '', '', '', '', '',]
const player1 = gameState.players[0];
const player2 = gameState.players[1];
let counter = 0;

/* 
- ***************Game area
- ***************declare variables ( X or O)
-****************lines for grid in css
- ***************shading for a checkered pattern
- first click X second click 0 and alternate
-update board
-check for winning combo after each move
-update message to declare winner

create function to place an X in a cell
call function 
run js file
*/

// Write functions to manipulate gameState --> maybe even a method?

// let initialState

// //state
// function init() {

// }
//  init()

// //render
// function renderState() {

// }

// // listeners
board.addEventListener("click", function (event) {
  gameState.count ++
  if (gameState.count % 2 === 0) {
    console.log(event.target.id);
    gameState.board[event.target.id] = "x";
    event.target.innerText = player1;
  } else {
    console.log(event.target.id);
    gameState.board[event.target.id] = "O";
    event.target.innerText = player2;
  }
});

// }

// renderState()

// function start() {
//     if(Math.random() < 5) {

//     }
// }

// put stuff on the screen

// const board = document.querySelector('.board')
// board.addEventListener('click', onBoardClick)

// const newGameButton = document.createElement('button')
// newGameButton.classList.add('newGame')

// const computer = document.createElement('button')
// computer.classList.add('computer')

// make them work together
