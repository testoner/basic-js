const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //let members = ["sadsad", 'zxzx', 'asasasaa', 'badym'];
  let res = [];
  if (!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) == "string") {
      let s = members[i].toUpperCase().trim().split('');
      res.push(s[0]);
    }

  }

  return res.sort().join("");
  //return res.join('').toUpperCase().splice("").sort().join("");

};
