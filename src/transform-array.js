const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let result = Array.from(arr);
  for (let e = 0; e < arr.length; e++) {
    if (result[e] === "--discard-next") {
      delete result[e];
      delete result[e + 1];
    } else if (result[e] === "--discard-prev") {
      delete result[e - 1];
      delete result[e];
    } else if (arr[e] === "--double-next") {
      result[e] = result[e + 1];
    } else if (arr[e] === "--double-prev") {
      result[e] = result[e - 1];
    }
  }
  return result.filter((x) => x !== undefined);
}

module.exports = {
  transform,
};
