const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = n.toString();
  if (n > 9) {
    let i = 0;
    let sum = 0;
    while (i < str.length) {
      sum += parseInt(str[i]);
      i++;
    }

    return getSumOfDigits(sum);
  }
  return n;
}

module.exports = {
  getSumOfDigits,
};
