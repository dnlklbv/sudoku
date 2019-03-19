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


// solveSudoku([[5, 3, 4, 6, 7, 8, 9, 0, 0],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]]);


//   function findEmptyCell(field) {
//     for (let i = 0; i < field.length; i += 1) {
//       for (let j = 0; j < field.length; j += 1) {
//         if (field[i][j] === 0) {
//           pos = [i, j];
//           return pos;
//         }
//       }
//     }
//     return true;
//   }

//   function isNumberSafe(field, pos, num) {
//     // row
//     for (let i = 0; i < field.length; i++) {
//       if (field[i][pos[1]] === num) {
//         return false;
//       }
//     }
//     // col
//     for (let i = 0; i < field.length; i++) {
//       if (field[pos[0]][i] === num) {
//         return false;
//       }
//     }
//     // square
//     const sqRow = Math.ceil(pos[0] / 3) * 3;
//     const sqCol = Math.ceil(pos[1] / 3) * 3;

//     for (let i = sqRow; i < sqRow + 3; i += 1) {
//       for (let j = sqCol; i < sqCol + 3; j += 1) {
//         if (field[i][j] === num) return false;
//       }
//     }

//     return true;
//   }
