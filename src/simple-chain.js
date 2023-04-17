const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    arguments.length > 0
      ? this.chain.push(`( ${value} )`)
      : this.chain.push("( )");
    return this;
  },
  removeLink(position) {
    if (
      position > 0 &&
      position < this.getLength() &&
      typeof position === "number"
    ) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishedChain = [...this.chain].join("~~");
    this.chain = [];
    return finishedChain;
  },
};

module.exports = {
  chainMaker,
};
