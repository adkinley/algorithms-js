const isPrime = require('../../../src').algorithms.math.isPrime;

const assert = require('assert');

describe('isPrime', () => {
  it('Zero and 1 are not prime', () => {
    assert.equal(isPrime(0), false);
    assert.equal(isPrime(1), false);
  });
  it('All these values are not prime', () => {
	    assert.equal(isPrime(4), false,"4 should not be prime");
	    assert.equal(isPrime(21), false);
	    assert.equal(isPrime(1000), false);
	    assert.equal(isPrime(169), false);
	    assert.equal(isPrime(64), false);
  });
  it('All these values are prime', () => {
	    assert.equal(isPrime(2), true,"2 should be prime");
	    assert.equal(isPrime(13), true,"13 should be prime");
	    assert.equal(isPrime(97), true,"97 should be prime");
	    assert.equal(isPrime(997), true, "997 should be prime");
	    assert.equal(isPrime(1009), true, "1009 should be prime");
});
  
});
