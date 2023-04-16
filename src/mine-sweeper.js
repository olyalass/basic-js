const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const columns = matrix[0].length;
  const result = Array(matrix.length)
    .fill()
    .map(() => Array(columns));
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j < matrix.length - 1 && i < columns - 1 && matrix[j + 1][i + 1]) {
        result[j][i] ? result[j][i]++ : (result[j][i] = 1);
      }
      if (j < matrix.length - 1 && i > 0 && matrix[j + 1][i - 1]) {
        result[j][i] ? result[j][i]++ : (result[j][i] = 1);
      }
      if (j > 0 && i < columns - 1 && matrix[j - 1][i + 1]) {
        result[j][i] ? result[j][i]++ : (result[j][i] = 1);
      }
      if (j > 0 && i > 0 && matrix[j - 1][i - 1]) {
        result[j][i] ? result[j][i]++ : (result[j][i] = 1);
      }
      if (j > 0 && matrix[j - 1][i]) {
        result[j][i] ? result[j][i]++ : (result[j][i] = 1);
      }
      if (i > 0 && matrix[j][i - 1]) {
        result[j][i] ? result[j][i]++ : (result[j][i] = 1);
      }
      if (j < matrix.length - 1 && matrix[j + 1][i]) {
        result[j][i] ? result[j][i]++ : (result[j][i] = 1);
      }
      if (i < columns - 1 && matrix[j][i + 1]) {
        result[j][i] ? result[j][i]++ : (result[j][i] = 1);
      }
      if (result[j][i] === undefined) result[j][i] = 0;
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
