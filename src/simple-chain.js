
const chainMaker = {
  res: [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.res.push("( " + value + ' )');
    return this;
  },
  removeLink(position) {
    if (typeof (position) == "number" && position > 0 && position <= this.res.length) {
      this.res.splice(position - 1, 1);
    } else {
      this.res = [];
      throw Error();
    }
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let out = this.res;
    this.res = [];
    return out.join('~~');
  }
};

module.exports = chainMaker;
