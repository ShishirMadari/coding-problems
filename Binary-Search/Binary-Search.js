/**
 * Given a sorted (in ascending order) integer array nums of n elements and a target value, 
 * write a function to search target in nums. If target exists, 
 * then return its index, otherwise return -1.
 *
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 *
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    while (left <= right) {
        const med = Math.floor((left + right) / 2);
        
        if (nums[med] === target)
            return med;
        if (nums[med] > target)
            right = med-1;
        else 
            left = med+1;
    }
    
    return -1
    
};