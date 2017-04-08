/* eslint-env mocha */
const Stack = require('../../src').DataStructures.Stack;
const assert = require('assert');

describe('Stack', () => {
  it('should be empty when initialized', () => {
    const inst = new Stack();
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
  });

  it('should push a node', () => {
    const inst = new Stack();

    inst.push(10);
    assert(!inst.isEmpty());
    assert.equal(inst.size, 1);
  });

  it('should check top value', () => {
    const inst = new Stack();

    inst.push(10);
    inst.push(20);
    inst.push(30);
    inst.push(40);
    inst.push(50);
    assert(!inst.isEmpty());
    assert.equal(inst.size, 5);
    assert.equal(inst.top(), 50);
  });

  it('should pop node', () => {
    const inst = new Stack();

    inst.push(10);
    inst.push(20);
    inst.push(30);
    inst.push(40);
    inst.push(50);

    let poppedNodeVal = inst.pop();
    assert.equal(poppedNodeVal, 50);
    assert.equal(inst.top(), 40);
    assert.equal(inst.size, 4);

    inst.pop();
    inst.pop();
    poppedNodeVal = inst.pop();

    assert.equal(poppedNodeVal, 20);
    assert.equal(inst.top(), 10);
    assert.equal(inst.size, 1);
  });

  it('should throw error on popping from empty stack', () => {
    const inst = new Stack();
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);

    assert.throws(() => inst.pop(), Error);
  });
});
