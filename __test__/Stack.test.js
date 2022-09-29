"use strict";

const Stack = require("../Stack/Stack");

describe("Stack", () => {
  it("should create an empty stack", () => {
    const stack = new Stack();

    expect(stack).toBeDefined();
    expect(stack.top).toBeNull();
  });

  it("should add items to the stack", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
  });

  it("should remove items from the stack", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    const value = stack.pop();

    expect(value).toEqual(2);
    expect(stack.top.value).toEqual(1);
  });

  it("should peek the top item from the stack", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toEqual(2);
  });

  it("should check if the stack is empty", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);

    expect(stack.isEmpty()).toEqual(false);
  });
});
