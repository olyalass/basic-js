const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let obj = {};
  let prev;
  for (let i = 0; i < str.length; i++) {
    str[i] === prev
      ? obj[str[i] + 2]
        ? obj[str[i] + 2]++
        : obj[str[i]]++
      : obj[str[i]]
      ? (obj[str[i] + 2] = 1)
      : (obj[str[i]] = 1);
    prev = str[i];
  }
  let result = "";
  const keys = Object.keys(obj);
  keys.forEach((e) => {
    e.length > 1
      ? obj[e[0]] === 1
        ? (result += e[0])
        : (result += obj[e[0]] + e)
      : obj[e] === 1
      ? (result += e)
      : (result += obj[e] + e);
  });
  return result;
}

module.exports = {
  encodeLine,
};
