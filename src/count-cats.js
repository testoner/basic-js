const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0;
  let obs = [];
  //let matrix = [['##', 'dd', '00'],['^^', '..', 'ss'],['AA', 'dd', 'Oo'],];
  for (let i = 0; i < matrix.length; i++) {
    obs = matrix[i];
    for (let j = 0; j < obs.length; j++) {
      if (obs[j] == '^^') res += 1;
    }
  }
  return res;
  //console.log(res);
};
