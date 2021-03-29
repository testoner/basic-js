const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(rev) {
    this.rev = rev === false ? "reverse" : "direct";
  }
  encrypt(s, l) {
    if (!s || !l) throw Error();
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "";
    s = s.toUpperCase();
    l = l.toUpperCase();
    let i = 0;
    for (let j = 0; j < s.length; j++) {
      if (abc.indexOf(s[j]) < 0) {
        res += s[j];
        i++;
      } else {
        const msgIndex = abc.indexOf(s[j]);
        const keyIndex = abc.indexOf(l[(j - i) % l.length]);
        res = res + abc.charAt((msgIndex + keyIndex) % abc.length);
      }
    }
    return this.rev === "reverse" ? res.split("").reverse().join("") : res;
  }
  decrypt(s, l) {
    if (!s || !l) throw Error();
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = "";
    s = s.toUpperCase();
    l = l.toUpperCase();
    let i = 0;
    for (let j = 0; j < s.length; j++) {
      if (abc.indexOf(s[j]) < 0) {
        res += s[j];
        i++;
      } else {
        const msgIndex = abc.indexOf(s[j]);
        const keyIndex = abc.indexOf(l[(j - i) % l.length]);
        res = res + abc.charAt((msgIndex + abc.length - keyIndex) % abc.length);
      }
    }
    return this.rev === "reverse" ? res.split("").reverse().join("") : res;
  }
}

module.exports = VigenereCipheringMachine;