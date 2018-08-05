/**
 *
 * Implement pow(x, n), which calculates x raised to the power n (xn).
 *
 * Example 1:
 * Input: 2.00000, 10
 * Output: 1024.00000
 *
 *
 * Example 2:
 * Input: 2.10000, 3
 * Output: 9.26100
 *
 *
 * Example 3:
 * Input: 2.00000, -2
 * Output: 0.25000
 *
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let multiplyingFactor = n > 0 ? x : n < 0 ? (1 / x) : 1.0;
    let product = 1;
    for (let i = Math.abs(n); i > 0; i = Math.floor(i/2)) {
        if (i % 2 === 1) {
            product = product * multiplyingFactor;
        }
        multiplyingFactor = multiplyingFactor * multiplyingFactor;
    }
    
    return product;
};