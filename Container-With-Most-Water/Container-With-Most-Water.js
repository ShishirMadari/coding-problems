/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * Solution 1: Brute Force
 * iterate through all possibilites and save the max.
 * this requires efficiency of O(n^2)
 *
 **/
var maxArea = function(height) {
    let max = 0;
    
    for (let i = 0; i < height.length; i++) {
        for (let j = i; j < height.length; j++) {
            const volume = (Math.min(height[i], height[j]) * (j - i));
            if (volume > max)
                max = volume;
        }
    }
    return max;
    
};

/**
 * Solution 2: Greedy Algorithm / Adjusting the Window
 * the largest volume is dependent on the shorter of the two points, and the width between the points. 
 * start off with the widest "window", and shorten the window based on which side has a shorter value
 *
 * if the window is shortened from the longer side, we are guaranteeing a smaller volume.
 *
 * however, if we shorten the window from the shorter side we might get a relatively larger value in turn,
 * that overcomes the loss in value from the shortening of the width of the window. 
 *
 * this solution requires one pass, efficiency O(n)
 *
 **/

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let volume = 0;
    
    while (left < right) {
        volume = Math.max(volume, Math.min(height[left], height[right]) * (right-left));
        
        if (height[left] > height[right]) {
            right--
        } else {
            left++;
        }
    }
    
    return volume;
};


