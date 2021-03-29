const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes = 1, separator = '+', addition = "", additionRepeatTimes = 1, additionSeparator = '|' } = options;
  let res = '';
  for (let i = 0; i < repeatTimes; i++) {
    res += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      res += addition;
      if (j + 1 < additionRepeatTimes) res += additionSeparator;
    }
    if (i + 1 < repeatTimes) {
      res += separator;
    }
  }
  return (res);
};
