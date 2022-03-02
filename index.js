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

// [ 0, 1, 2,
//   3, 4, 5,
//   6, 7, 8,]

function winCheck() {
  let array = gameState.board.flat();
  const winBanner = document.querySelector("#winBanner");
  console.log(winBanner, "banner");
  console.log(array);
  // console.log(win)
  // for (let i = 0; i < win.length; i++) {
  //   let array = win[i];
  let winMessageX = "Congratulations! " + player1 + " wins!!!";
  let winMessageO = "Congratulations! " + player2 + " wins!!!";
  console.log(player1);
  if (player1) {
    // console.log('so many hellos', array)
    if (array[0] === "X" && array[1] === "X" && array[2] === "X") {
      console.log(winMessageX, "hello again");
      winBanner.innerText = winMessageX;
    } else if (array[3] === "X" && array[4] === "X" && array[5] === "X") {
      winBanner.innerText(winMessageX);
    } else if (array[6] === "X" && array[7] === "X" && array[8] === "X") {
      winBanner.innerText(winMessageX);
    } else if (array[0] === "X" && array[3] === "X" && array[6] === "X") {
      winBanner.innerText(winMessageX);
    } else if (array[1] === "X" && array[4] === "X" && array[7] === "X") {
      winBanner.innerText(winMessageX);
    } else if (array[2] === "X" && array[5] === "X" && array[8] === "X") {
      winBanner.innerText(winMessageX);
    } else if (array[0] === "X" && array[4] === "X" && array[8] === "X") {
      winBanner.innerText(winMessageX);
    } else if (array[2] === "X" && array[4] === "X" && array[6] === "X") {
      winBanner.innerText(winMessageX);
    }
  } else if (player2) {
    if (array[0] === "O" && array[1] === "O" && array[2] === "O") {
      // console.log(winMessageO, "hello again")
      winBanner.innerTeOt = winMessageO;
    } else if (array[3] === "O" && array[4] === "O" && array[5] === "O") {
      winBanner.innerTeOt(winMessageO);
    } else if (array[6] === "O" && array[7] === "O" && array[8] === "O") {
      winBanner.innerTeOt(winMessageO);
    } else if (array[0] === "O" && array[3] === "O" && array[6] === "O") {
      winBanner.innerTeOt(winMessageO);
    } else if (array[1] === "O" && array[4] === "O" && array[7] === "O") {
      winBanner.innerTeOt(winMessageO);
    } else if (array[2] === "O" && array[5] === "O" && array[8] === "O") {
      winBanner.innerTeOt(winMessageO);
    } else if (array[0] === "O" && array[4] === "O" && array[8] === "O") {
      winBanner.innerTeOt(winMessageO);
    } else if (array[2] === "O" && array[4] === "O" && array[6] === "O") {
      winBanner.innerText(winMessageO);
    }
  }
}

const board = document.querySelector(".board");
const cell = document.querySelector(".cell");
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

*************create function to place an X in a cell
*************all function 
*************run js file
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
  console.log(gameState.count);
  let currentPlayer;
  if (gameState.count % 2 === 1) {
    currentPlayer = "O";
    console.log(event.target.id);
    gameState.board[event.target.id] = "O";
    console.log(gameState.board[0], "message after");
    event.target.innerText = player2;
    console.log(gameState.board);
    // renderState()
    winCheck();
  } else {
    currentPlayer = "X";
    console.log(event.target.id);
    gameState.board[event.target.id] = "x";
    event.target.innerText = player1;
    // renderState()
    winCheck();
  }
  if (event.target.id === "zero") {
    gameState.board[0][0] = currentPlayer;
  } else if (event.target.id === "one") {
    gameState.board[0][1] = currentPlayer;
  } else if (event.target.id === "two") {
    gameState.board[0][2] = currentPlayer;
  } else if (event.target.id === "three") {
    gameState.board[1][0] = currentPlayer;
  } else if (event.target.id === "four") {
    gameState.board[1][1] = currentPlayer;
  } else if (event.target.id === "five") {
    gameState.board[1][2] = currentPlayer;
  } else if (event.target.id === "six") {
    gameState.board[2][0] = currentPlayer;
  } else if (event.target.id === "seven") {
    gameState.board[2][1] = currentPlayer;
  } else if (event.target.id === "eight") {
    gameState.board[2][2] = currentPlayer;
  }

  gameState.count++;
  console.log(gameState.count, "hello Ed");
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
// newGameButton.addEventListener('click', function(event){
//   location.reload()

// })

// const computer = document.createElement('button')
// computer.classList.add('computer')

// make them work together
