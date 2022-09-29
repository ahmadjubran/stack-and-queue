"use strict";

const Node = require("./Node");

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.back) {
      this.back.next = node;
    }

    this.back = node;

    if (!this.front) {
      this.front = node;
    }
  }

  dequeue() {
    if (this.front) {
      const node = this.front;
      this.front = node.next;

      if (!this.front) {
        this.back = null;
      }

      return node.value;
    }
  }

  peek() {
    if (this.front) {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;
