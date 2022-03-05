// Game Object

const gameState = {
  players: ["X", "O"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  count: 0,
  currentPlayer: "X",
};

// function to check for winning combo
function winCheck() {
  let array = gameState.board.flat();
  const winBanner = document.querySelector("#winBanner");
  console.log(array);
  let winMessageX = "Congratulations! " + player1 + " wins!!!";
  let winMessageO = "Congratulations! " + player2 + " wins!!!";
  let tieMessage = "It was a tie! New game?"
  
  if ((array[0] && array[1] && array[2] && array[3] && array[4] && array[5] && array[6] && array[7] && array[8])  !== null) { //- checking for tie
      winBanner.innerText = tieMessage
  }
  if (gameState.currentPlayer === "X") {
    if (array[0] === "X" && array[1] === "X" && array[2] === "X") { //----------------------------------------------------------- checking for win of X
      alert(winBanner.innerText = winMessageX)
    } else if (array[3] === "X" && array[4] === "X" && array[5] === "X") {
      alert(winBanner.innerText = winMessageX)
    } else if (array[6] === "X" && array[7] === "X" && array[8] === "X") {
      alert(winBanner.innerText = winMessageX)
    } else if (array[0] === "X" && array[3] === "X" && array[6] === "X") {
      alert(winBanner.innerText = winMessageX)
    } else if (array[1] === "X" && array[4] === "X" && array[7] === "X") {
      alert(winBanner.innerText = winMessageX)
    } else if (array[2] === "X" && array[5] === "X" && array[8] === "X") {
      alert(winBanner.innerText = winMessageX)
    } else if (array[0] === "X" && array[4] === "X" && array[8] === "X") {
      alert(winBanner.innerText = winMessageX)
    } else if (array[2] === "X" && array[4] === "X" && array[6] === "X") {
      alert(winBanner.innerText = winMessageX)
    }
  } else if (gameState.currentPlayer === "O") {
    if (array[0] === "O" && array[1] === "O" && array[2] === "O") { //---------------------------------------------------------- checking for win of O
      // console.log(winMessageO, "hello again");
      alert(winBanner.innerText = winMessageO);
    } else if (array[3] === "O" && array[4] === "O" && array[5] === "O") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[6] === "O" && array[7] === "O" && array[8] === "O") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[0] === "O" && array[3] === "O" && array[6] === "O") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[1] === "O" && array[4] === "O" && array[7] === "O") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[2] === "O" && array[5] === "O" && array[8] === "O") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[0] === "O" && array[4] === "O" && array[8] === "O") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[2] === "O" && array[4] === "O" && array[6] === "O") {
      alert(winBanner.innerText = winMessageO);
    }
  } else if (gameState.currentPlayer === "computer") { //--------------------------------------------------------------------- checking for win of computer
    if (array[0] === "computer" && array[1] === "computer" && array[2] === "computer") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[3] === "computer" && array[4] === "computer" && array[5] === "computer") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[6] === "computer" && array[7] === "computer" && array[8] === "computer") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[0] === "computer" && array[3] === "computer" && array[6] === "computer") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[1] === "computer" && array[4] === "computer" && array[7] === "computer") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[2] === "computer" && array[5] === "computer" && array[8] === "computer") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[0] === "computer" && array[4] === "computer" && array[8] === "computer") {
      alert(winBanner.innerText = winMessageO);
    } else if (array[2] === "computer" && array[4] === "computer" && array[6] === "computer") {
      alert(winBanner.innerText = winMessageO);
    }
  }
}

//computer function to calculate move
const board = document.querySelector(".board");
const cell = document.querySelector(".cell");
const player1 = gameState.players[0];
const player2 = gameState.players[1];

function newSpot() {
  let row = Math.floor(Math.random() * 3)
  let column = Math.floor(Math.random() * 3) 
  let compMove = gameState.board[row][column] 
  if (compMove === null) {
    gameState.board[row][column] = gameState.players[1]
    let currentCell
    if(row === 0 && column === 0) {
      currentCell = 'zero'
    } else if (row === 0 && column === 1){
      currentCell = 'one'
    } else if (row === 0 && column === 2){
      currentCell = 'two'
    } else if (row === 1 && column === 0){
        currentCell = 'three'
    } else if (row === 1 && column === 1){
        currentCell = 'four'
    } else if (row === 1 && column === 2){
        currentCell = 'five'
    } else if (row === 2 && column === 0){
        currentCell = 'six'
    } else if (row === 2 && column === 1){
        currentCell = 'seven'
    } else if (row === 2 && column === 2){
        currentCell = 'eight'
    }
    const computerCell = document.getElementById(currentCell)
    computerCell.innerText = 'O'
    winCheck()
    return
  } else {
    return newSpot()
  }
}

// win checker listener
board.addEventListener("click", function (event) {
  if (!event.target.innerText.length) {
    if (gameState.count % 2 === 1 && gameState.players[1] !== 'computer') {
      gameState.currentPlayer = gameState.players[1];
      gameState.board[event.target.id] = gameState.players[1];
      event.target.innerText = gameState.players[1];

    } else {
      gameState.currentPlayer = gameState.players[0];
      gameState.board[event.target.id] = gameState.players[0];
      event.target.innerText = gameState.players[0];
      if (gameState.players[1] === 'computer') {
        console.log('hello im a computer') //----------------------------------------------------------------------- fun console.log
        newSpot(event)
        console.log(gameState.board)
      }
    }
    if (event.target.id === "zero") {
      gameState.board[0][0] = gameState.currentPlayer;
    } else if (event.target.id === "one") {
      gameState.board[0][1] = gameState.currentPlayer;
    } else if (event.target.id === "two") {
      gameState.board[0][2] = gameState.currentPlayer;
    } else if (event.target.id === "three") {
      gameState.board[1][0] = gameState.currentPlayer;
    } else if (event.target.id === "four") {
      gameState.board[1][1] = gameState.currentPlayer;
    } else if (event.target.id === "five") {
      gameState.board[1][2] = gameState.currentPlayer;
    } else if (event.target.id === "six") {
      gameState.board[2][0] = gameState.currentPlayer;
    } else if (event.target.id === "seven") {
      gameState.board[2][1] = gameState.currentPlayer;
    } else if (event.target.id === "eight") {
      gameState.board[2][2] = gameState.currentPlayer;
    }
    gameState.count++;
    winCheck();
  }
});

// New game -- reset the board
const pvp = document.querySelector("#twoPlayer");
const comp = document.querySelector("#onePlayer");
const reset = document.querySelector("#newGame");

reset.addEventListener("click", function (event) {
  gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  let clear = document.getElementsByClassName('cell')
  let divArray = Object.values(clear)
  for (let i = 0; i < divArray.length; i++) {
    let clearElem = divArray[i]
    clearElem.innerText = ""
  }
  gameState.count = 0
  let clearMessage = document.getElementById('winBanner')
  clearMessage.innerText = ""
});

// adding player names
let submitX = document.getElementsByClassName('submitX')
let submitO = document.getElementsByClassName('submitO')
let playerOneForm = document.getElementById('playerOne')
let playerTwoForm = document.getElementById('playerTwo')
let playerX = document.querySelector('.playerX')
let playerO = document.querySelector('.playerO')

playerOneForm.addEventListener('submit', function(event) {
  event.preventDefault()
  let playX = document.getElementsByClassName('textX')[0]
  playerX.innerText = `X is: ${playX.value}`
})

playerTwoForm.addEventListener('submit', function(event) {
  event.preventDefault()
  let playO = document.getElementsByClassName('textO')[0]
  playerO.innerText = `O is: ${playO.value}`
})

// setting O to display computer
comp.addEventListener('click', function(event) {
  gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  let clear = document.getElementsByClassName('cell')
  let divArray = Object.values(clear)
  for (let i = 0; i < divArray.length; i++) {
    let clearElem = divArray[i]
    clearElem.innerText = ""
  }
  gameState.count = 1
  let clearMessage = document.getElementById('winBanner')
  clearMessage.innerText = ""
  let playerO = document.querySelector('.playerO')
  playerO.innerText = 'O is: computer'
  gameState.players[1] = 'computer'
  console.log(gameState.players)
})

// switching from computer to PVP & reset board
pvp.addEventListener('click', function(event) {
  // location.reload()
  gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  let clear = document.getElementsByClassName('cell')
  let divArray = Object.values(clear)
  for (let i = 0; i < divArray.length; i++) {
    let clearElem = divArray[i]
    clearElem.innerText = ""
  }
  gameState.count = 0
  let clearMessage = document.getElementById('winBanner')
  clearMessage.innerText = ""
  let clearPlayO = document.querySelector('.playerO')
  gameState.players[1] = 'O'
  clearPlayO.innerText = ""
})