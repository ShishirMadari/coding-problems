/**
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
 * Find all triplets in the array which gives the sum of zero.
 *
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let solutionSet = [];
    let sumArray = []
    createPermutations(nums, 0, sumArray, solutionSet);
    
    return solutionSet.sort();
    
};

function createPermutations(nums, index, sumArr, solutionSet) {
    if (sumArr.length === 3) {
        if (sumArr[0] + sumArr[1] + sumArr[2] === 0) {
            const temp = [sumArr[0], sumArr[1], sumArr[2]];
            solutionSet.push(temp);
        }
        return;
    }
    for (let i = index; i < nums.length; i++) {
        sumArr.push(nums[i]);
        createPermutations(nums, i + 1, sumArr, solutionSet);
        sumArr.pop();
    }
}
