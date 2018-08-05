/**
 * Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), 
 * find all unique combinations in candidates where the candidate numbers sums to target.
 *
 * The same repeated number may be chosen from candidates unlimited number of times.
 * All numbers (including target) will be positive integers.
 *
 * Example 1:
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 *    [7],
 *    [2,2,3]
 * ]
 *
 *
 * Example 2:
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 *    [2,2,2,2],
 *    [2,3,3],
 *    [3,5]
 * ]
 *
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let solutionSet = [];
    let arr = [];
    recursiveSearch(candidates, target, 0, arr, solutionSet);
    
    return solutionSet;
};

function recursiveSearch(candidates, target, index, arr, solutionSet) {
    if (target === 0) {
        const temp = arr.slice().sort();
        solutionSet.push(temp);
        return;
        
    } else if (target < 0) { 
        return; 
    } else {
        for (let i = index; i < candidates.length; i++) {
            arr.push(candidates[i]);
            recursiveSearch(candidates, target-candidates[i], i, arr, solutionSet);
            arr.pop();
        }
    }
}