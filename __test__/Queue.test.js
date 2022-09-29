"use strict";

const Queue = require("../Queue/Queue");

describe("Queue", () => {
  it("should create an empty queue", () => {
    const queue = new Queue();

    expect(queue).toBeDefined();
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
  });

  it("should enqueue data to the queue", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(2);
  });

  it("should dequeue from the queue from the front", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty()).toEqual(true);
  });

  it("should peek data from the front of the queue", () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toEqual(1);
    expect(queue.peek()).toEqual(1);
  });

  it("should check if queue is empty", () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toEqual(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toEqual(false);
  });
});
