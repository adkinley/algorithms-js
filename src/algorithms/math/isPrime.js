/* isPrime
 * @params {Number} to determine primeness
 * @return {Boolean} whether or not the Number is prime
 */
const isPrime = (n) => {
	if (n<2)
		return false;
	if (n==2)
		return true;
	for (var i = 2;i<=Math.sqrt(n);i++)
		if (n%i==0)
			return false
	return true;
}

module.exports = isPrime;
