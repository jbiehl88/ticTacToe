// Game Object

// const gameState = {
//     players: ['x', 'o'],
//     board: [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null]
//     ]
//   }

const board = document.querySelector('.board')
const ticTacBoard = ['', '', '', '', '', '', '', '', '',]
let currPlayer = 'x'


  /* 
-Game area
-declare variables ( X or O)
-lines for grid in css
- shading for a checkered pattern
- first click X second click 0 and alternate
-update board
-check for winning combo after each move
-update message to declare winner

create function to place an X in a cell
call function 
run js file
*/

board.addEventListener('click', function (event) {
    console.log(event.target.id)
    ticTacBoard[event.target.id] = 'x'
    event.target.innerText = currPlayer
    currPlayer = 'o'
})
// Write functions to manipulate gameState --> maybe even a method?

// let initialState

// //state
// function buildInitialState() {

// }

// //render
// function renderState() {

// }

// // listeners
// function onBoardClick() {

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