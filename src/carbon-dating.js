const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  //let sampleActivity = "3";
  //if (typeof (+sampleActivity == "undefined")) return false;
  if (typeof (sampleActivity) != "string") return false;
  if (typeof (+sampleActivity) == "undefined") console.log(false);
  sampleActivity = +sampleActivity;
  let ln = Math.log(MODERN_ACTIVITY / sampleActivity);
  let k = 0.693 / HALF_LIFE_PERIOD;
  let res = ln / k;
  if ((isNaN(res)) || (res < 0) || (res == Infinity)) return false;
  return Math.ceil(res);
};
