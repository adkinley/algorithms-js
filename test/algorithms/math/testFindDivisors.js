/* eslint-env mocha */
const findDivisors = require('../../../src').algorithms.math.findDivisors;
const gcd = require('../../../src').algorithms.math.gcd;

const assert = require('assert');

describe('Find Divisors', () => {
  it('should return [] for numbers less than 0', () => {
    assert.deepEqual(findDivisors(-10), []);
    assert.deepEqual(findDivisors(-1), []);
    assert.deepEqual(findDivisors(-100), []);    
  });

  it('0 Should return a list containing only itself', () => {
    assert.deepEqual(findDivisors(0), [0]);
  });
  it('1 Should return a list containing only itself', () => {
	    assert.deepEqual(findDivisors(1), [1]);
	  });

  it('Should return a list of divisors of a number including the number', () => {
    assert.deepEqual(findDivisors(2), [1,2]);
    assert.deepEqual(findDivisors(4), [1,2,4]);
    assert.deepEqual(findDivisors(5), [1,5]);
    assert.deepEqual(findDivisors(24), [1,2,3,4,6,8,12,24]);
    assert.deepEqual(findDivisors(60), [1,2,3,4,5,6,10,12,15,20,30,60]);
  });

});
