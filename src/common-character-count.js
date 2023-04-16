const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let first = {},
    second = {};
  countCharacters(s1, first);
  countCharacters(s2, second);
  let counter = 0;
  let letters = Object.keys(first);
  // if (!letters) return 0;
  letters.forEach((e) => {
    if (second[e]) {
      second[e] > first[e] ? (counter += first[e]) : (counter += second[e]);
    }
  });
  return counter;
}
function countCharacters(str, obj) {
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] > 0 ? obj[str[i]]++ : (obj[str[i]] = 1);
  }
}

module.exports = {
  getCommonCharacterCount,
};
