/**
 * Produces the nth fibonacci number
 * Fibonnaci F(n) is defined as
 * F(0) = 1
 * F(1) = 1
 * F(n) = F(n-1) + F(n-2)
 * @param {Number} Zero based index of Fibonacci number to produce
 * @return {Number} Value of the Nth Fibonacci number
 */
const fibonacci = (n) => {
	if (n<0)
		return null;
	if (n==0 || n==1) 
		return n;
	var cur = 1;
	var prev = 0;

	for (var i = 2; i <=n;i++) {
		var tmp = cur;
		cur = cur + prev;
		prev = tmp;
	}
	return cur;
}

module.exports = fibonacci;
