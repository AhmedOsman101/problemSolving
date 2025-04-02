// https://www.codewars.com/kata/58a3b28b2f949e21b3000001/train

const Pieces = {
  ROOK: 1,
  EMPTY: 0,
  BISHOP: -1,
  ATTACKED: null,
} as const;

type Piece = number | null;
type Square = {
  row: number;
  col: number;
  type: "bishop" | "rook";
};

const arrayColumn = (arr: Piece[][], col: number): Piece[] =>
  arr.map(row => row[col]);

const arr: number[][] = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, -1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function checkRook(board: Piece[][], row: number, col: number): Piece[][] {
  arrayColumn(board, col).forEach((cell, index) => {
    if (cell === Pieces.EMPTY) board[index][col] = Pieces.ATTACKED;
  });

  board[row].forEach((cell, index) => {
    if (cell === Pieces.EMPTY) board[row][index] = Pieces.ATTACKED;
  });

  return board;
}

function checkBishop(board: Piece[][], row: number, col: number): Piece[][] {
  const startLeft = Math.min(7 - row, col);
  const startRight = Math.min(7 - row, 7 - col);

  /*
      const numUp = 7 - row;
      const numDown = row;
      const numLeft = col;
      const numRight = 7 - col;

      Math.min(numUp, numLeft), // up left
      Math.min(numDown, numRight), // down right
      Math.min(numUp, numRight), // up right
      Math.min(numDown, numLeft), // down left

  */

  for (let i = 0; i < startLeft; i++) {
    const cell = board[startLeft][7 - i];
    if (cell === Pieces.EMPTY) board[startLeft+i][i] = Pieces.ATTACKED;
  }

  arrayColumn(board, col).forEach((cell, index) => {
    if (cell === Pieces.EMPTY) board[index][col] = Pieces.ATTACKED;
  });

  board[row].forEach((cell, index) => {
    if (cell === Pieces.EMPTY) board[row][index] = Pieces.ATTACKED;
  });

  return board;
}

/**
 *
 * @param {number[][]} board - The chessboard containing the pieces
 *
 * @returns {number} The number of safe squares
 */
function bishopsAndRooks(board: Piece[][]): number {
  const pieces: Square[] = [];

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      switch (col) {
        case Pieces.ROOK:
          pieces.push({ row: rowIndex, col: colIndex, type: "rook" });
          break;
        case Pieces.BISHOP:
          pieces.push({ row: rowIndex, col: colIndex, type: "bishop" });
          break;
      }
    });
  });

  for (const { row, col, type } of pieces) {
    switch (type) {
      case "rook":
        board = checkRook(board, row, col);
        break;
      case "bishop":
        board = checkBishop(board, row, col);
        break;
    }
  }

  const flatBoard = board.flat().reduce((prev: number, curr) => {
    if (curr === Pieces.EMPTY) return prev + 1;
    return prev;
  }, 0);

  console.log(stringifyBoard(board));
  return flatBoard;
}

function stringifyBoard(chessboard: Piece[][]) {
  let string = "|---|---|---|---|---|---|---|---|\n";

  let count = 1;
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      let symbol = "";
      if (chessboard[row][column] === 1) {
        symbol = "♜ ";
      } else if (chessboard[row][column] === -1) {
        symbol = "♝ ";
      } else if (chessboard[row][column] === 0) {
        symbol = `${count}`.padEnd(2, " ");
        count++;
      } else if (chessboard[row][column] === null) {
        symbol = "x ";
      }
      string += `| ${symbol}`;
    }
    string += "|\n|---|---|---|---|---|---|---|---|\n";
  }
  return string;
}

// console.log(stringifyBoard(arr));
console.log(bishopsAndRooks(arr)); // 42
// console.log(arrayColumn(arr, 0));
