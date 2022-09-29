"use strict";

const Node = require("./Node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (this.top) {
      const node = this.top;
      this.top = node.next;
      return node.value;
    }
  }

  peek() {
    if (this.top) {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack;
