const fibonacci = require('../../../src').algorithms.math.fibonacci;

const assert = require('assert');

describe('Fibonacci', () => {
  it('Should result in 1 for base cases of 0 and 1, 2', () => {
    assert.equal(fibonacci(0), 0);
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
  });
  it('Should result in correct value for all positive indexes', () => {
	    assert.equal(fibonacci(3), 2);
	    assert.equal(fibonacci(4), 3);
	    assert.equal(fibonacci(5), 5);
	    assert.equal(fibonacci(19), 4181);
	    assert.equal(fibonacci(20), 6765);

  });
  it('Should result in null for values less than 0', () => {
	    assert.equal(fibonacci(-5), null);
	    assert.equal(fibonacci(-10), null);
	    assert.equal(fibonacci(-20), null);
	  });

});