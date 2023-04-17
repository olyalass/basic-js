const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const reversedArr = domains.map((e) => e.split(".").reverse());
  const list = [];
  reversedArr.forEach((e) => {
    let eLength = e.length;
    for (let i = 1; i <= eLength; i++) {
      list.push("." + e.slice(0, i).join("."));
    }
  });

  const res = {};
  for (const e of list) {
    res[e] ? res[e]++ : (res[e] = 1);
  }

  return res;
}

module.exports = {
  getDNSStats,
};