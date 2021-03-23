const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(obj) {
    return 1 + (obj instanceof Array ? obj.reduce((max, item) => { return Math.max(max, this.calculateDepth(item)); }, 0) : -1);
  }
}
