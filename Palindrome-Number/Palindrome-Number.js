/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * Input: 121
 * Output: True
 *
 * Input: -121
 * Output: False
 *
 * Input: 10
 * Output: False
 *
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(x) {
    let val_string = x + "";
    
    for (let i = 0; i < (val_string.length / 2); i++) {
        if (val_string[i] !== val_string[val_string.length - 1 - i])
            return false;
    }
        
    return true;
};