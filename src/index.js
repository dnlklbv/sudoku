/* eslint-disable no-param-reassign */
module.exports = function solveSudoku(matrix) {
  function findEmptyCell(field) {
    for (let i = 0; i < field.length; i += 1) {
      for (let j = 0; j < field.length; j += 1) {
        if (field[i][j] === 0) return [i, j];
      }
    }
    return true;
  }

  function isNumberSafe(field, row, col, num) {
    // col
    for (let i = 0; i < field.length; i += 1) {
      if (field[i][col] === num) {
        return false;
      }
    }
    // row
    for (let i = 0; i < field.length; i += 1) {
      if (field[row][i] === num) {
        return false;
      }
    }
    // square
    const sqRow = row - (row % 3);
    const sqCol = col - (col % 3);

    for (let i = sqRow; i < sqRow + 3; i += 1) {
      for (let j = sqCol; j < sqCol + 3; j += 1) {
        if (field[i][j] === num) return false;
      }
    }
    return true;
  }

  function solve(field) {
    const pos = findEmptyCell(field);
    if (pos === true) return field;

    const row = pos[0];
    const col = pos[1];

    for (let i = 0; i <= 9; i += 1) {
      if (isNumberSafe(field, row, col, i)) {
        field[row][col] = i;
        if (solve(field)) return true;
        field[row][col] = 0;
      }
    }
    return false;
  }
  solve(matrix);
  return matrix;
}
