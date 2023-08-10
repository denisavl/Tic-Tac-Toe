const gameBoard = () => {
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  return { board };
};
const array = gameBoard();

const game = (() => {
  let choice = "X";
  let winnerDeclared = false;
  const field = document.querySelectorAll(".child");
  field.forEach((fields) => {
    fields.addEventListener("click", () => {
    if (winnerDeclared) return;
        const id = fields.id;
        const [x, y] = id.split("-");
        const row = parseInt(x);
        const column = parseInt(y);
  
        if (array.board[row][column] === "") {
          array.board[row][column] = choice;
          fields.textContent = choice;
          if (choice === "X") {
            choice = "O";
          } else choice = "X";
  
          displayController(array);
        }
        console.log(winnerDeclared);
  
    });
  });
})();

function displayController(array) {
  const player = document.querySelector(".playerWins");
  for (let i = 0; i < 3; i++) {
    if (
      (array.board[0][i] === array.board[1][i] &&
        array.board[1][i] === array.board[2][i] &&
        array.board[0][i] === "X") ||
      (array.board[i][0] === array.board[i][1] &&
        array.board[i][1] === array.board[i][2] &&
        array.board[i][0] === "X")
    ) {
      player.textContent = "Player one wins";
      winnerDeclared = true;
    } else if (
      (array.board[0][i] === array.board[1][i] &&
        array.board[1][i] === array.board[2][i] &&
        array.board[0][i] === "O") ||
      (array.board[i][0] === array.board[i][1] &&
        array.board[i][1] === array.board[i][2] &&
        array.board[i][0] === "O")
    ) {
      player.textContent = "Player two wins";
      winnerDeclared = true;
    }
  }

  if (
    (array.board[0][0] === array.board[1][1] &&
      array.board[1][1] === array.board[2][2] &&
      array.board[0][0] === "X") ||
    (array.board[0][2] === array.board[1][1] &&
      array.board[1][1] === array.board[2][0] &&
      array.board[0][2] === "X")
  ) {
    player.textContent = "Player one wins";
    winnerDeclared = true;
  } else if (
    (array.board[0][0] === array.board[1][1] &&
      array.board[1][1] === array.board[2][2] &&
      array.board[0][0] === "O") ||
    (array.board[0][2] === array.board[1][1] &&
      array.board[1][1] === array.board[2][0] &&
      array.board[0][2] === "O")
  ) {
    player.textContent = "Player two wins";
    winnerDeclared = true;
  }
  const isDraw = array.board.every(row => row.every(cell => cell !== ""));
  if (isDraw) {
    player.textContent = "It's a draw";
  }
}

const restartBt = document.querySelector(".restart");
restartBt.addEventListener("click",()=>{

})
