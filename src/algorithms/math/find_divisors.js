/**
 * Produces a list of all divisors of a number N
 * @param  {Number}    n
 * @return {List}     List of divisors of n
 */

const findDivisors = (n) => {
	var list = [];
	if (n==0) 
		return [0];
	for (var i = 1;i<=n;i++) 
		if (n%i==0) {
			list.push(i);
		}
	return list;
}

module.exports = findDivisors;
