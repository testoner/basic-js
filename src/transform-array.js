const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw Error;
  let res = [];
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    if (arr[i] == "--discard-next" && i != l - 1) {
      if (arr[i + 2] == "--discard-prev" || arr[i + 2] == "--double-prev") {
        i += 2;
      } else {
        if (i != l && i != l - 1) {
          i += 1;
        }
      }
    } else
      if (arr[i + 1] == "--discard-prev") {
        i += 1;

      } else
        if (arr[i] == "--double-next" && i != l - 1) {
          res.push(arr[i + 1]);

        } else
          if (arr[i + 1] == "--double-prev") {
            res.push(arr[i]);
            res.push(arr[i]);
            i += 1;
          } else {
            if (arr[i] != "--double-prev" && arr[i] != "--discard-prev" && arr[i] != "--double-next" && arr[i] != "--discard-next") res.push(arr[i]);
          }
  }
  return res;
};
