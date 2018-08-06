/**
 * Given a binary tree, determine if it is height-balanced.
 * 
 * a height-balanced binary tree is defined as:
 * a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;
    
    const leftHeight = 1 + findHeight(root.left);
    const rightHeight = 1 + findHeight(root.right);
    
    return (Math.abs(leftHeight - rightHeight) <= 1) && isBalanced(root.left) && isBalanced(root.right);
    
};

function findHeight(node) {
    if (node === null) return 0;
    return 1 + Math.max(findHeight(node.right), findHeight(node.left));
}