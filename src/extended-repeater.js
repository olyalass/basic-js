const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = "";
  if (options.addition !== undefined) {
    if (options.additionRepeatTimes) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        options.additionSeparator && i > 0
          ? (addition += options.additionSeparator + options.addition)
          : i === 0
          ? (addition = options.addition)
          : (addition += `|${options.addition}`);
      }
    } else addition = options.addition;
  }
  const bigString = str + addition;
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      options.separator && i > 0
        ? (str += options.separator + bigString)
        : i === 0
        ? (str = bigString)
        : (str += `+${bigString}`);
    }
  } else str = bigString;
  return str;
}

module.exports = {
  repeater,
};
