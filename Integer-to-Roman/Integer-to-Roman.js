/**
 * Given an integer, convert it to a roman numeral. Input is within the range from 1 to 3999.
 *
 * Example 1:
 * Input: 3
 * Output: "III"
 *
 * Example 2:
 * Input: 2
 * Output: "IV"
 *
 * Example 3:
 * Input: 9
 * Output: "IX"
 * 
 * Example 4:
 * Input: 58
 * Output: "LVIII"
 * 
 * Example 5:
 * Input: 1994
 * Output: "MCMXCIV"
 *
 *
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    let romanNumeralsMap = new Map();
    romanNumeralsMap.set(1, "I");
    romanNumeralsMap.set(4, "IV");
    romanNumeralsMap.set(5, "V");
    romanNumeralsMap.set(9, "IX");
    romanNumeralsMap.set(10, "X");
    romanNumeralsMap.set(40, "XL");
    romanNumeralsMap.set(50, "L");
    romanNumeralsMap.set(90, "XC");
    romanNumeralsMap.set(100, "C");
    romanNumeralsMap.set(400, "CD");
    romanNumeralsMap.set(500, "D");
    romanNumeralsMap.set(900, "CM");
    romanNumeralsMap.set(1000, "M");
    
    let romanValue = "";

    while(num > 0) {
        let mapIterator = romanNumeralsMap.keys();
        let previous = mapIterator.next().value;
        let mapValue = mapIterator.next().value;
        while (mapValue != undefined && mapValue <= num) {
            previous = mapValue;
            mapValue = mapIterator.next().value;
        }
        romanValue += romanNumeralsMap.get(previous);
        num = num - previous;
    }
    
    return romanValue;
};