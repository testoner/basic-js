const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == undefined) return "Unable to determine the time of year!";
  if (date.hasOwnProperty('getDay') != false) throw Error('THROWN');
  let res = date.getMonth();
  if (res == 0 || res == 1 || res == 11) return "winter";
  if (res >= 2 && res <= 4) return "spring";
  if (res >= 5 && res <= 7) return "summer";
  if (res >= 8 && res <= 10) return "fall";
};