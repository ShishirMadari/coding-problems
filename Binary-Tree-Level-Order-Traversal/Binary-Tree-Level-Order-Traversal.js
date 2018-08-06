/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 *
 * Example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 *
 * return its level order traversal as:
 * 
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
 *
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let traversal = [];
    constructTraversal(root, traversal, 0);
    
    return traversal;
};

function constructTraversal(node, traversal, depth) {
    if (node == null) {
        return;
    }
    if (traversal[depth] !== undefined) {
        traversal[depth].push(node.val);
    } else {
        traversal[depth] = [node.val];
    }
    
    constructTraversal(node.left, traversal, depth+1);
    constructTraversal(node.right, traversal, depth+1);
}