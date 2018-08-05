/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 * [
 * "((()))",
 * "(()())",
 * "(())()",
 * "()(())",
 * "()()()"
 * ]
 *
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    let str = "";
    createPermutation(n, 0, result, str);
    return result;
};


function createPermutation(input, output, arr, str) {
    if (input <= 0 && output === 0) {
        arr.push(str);
        return;
    }
    
    if (output === 0) {
        str += '(';
        createPermutation(input-1, output+1, arr, str);
    } else if (input === 0) {
        str += ')';
        createPermutation(input, output-1, arr, str);
    } else {
        let stringOne = str + '(';
        createPermutation(input-1, output+1, arr, stringOne);
        let stringTwo = str + ')';
        createPermutation(input, output-1, arr, stringTwo);
    }
}