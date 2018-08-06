/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let root = recursiveBuild(preorder.slice(), inorder.slice());
    return root;
    
};

function recursiveBuild(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0)
        return null;
    
    if (preorder.length === 1) {
        let node = new TreeNode(preorder[0]);
        return node;
    }
        
    let root = new TreeNode(preorder[0]);
    let rootIndex = inorder.indexOf(preorder[0]);
    
    preorder = preorder.slice(1);
    let leftInorder = inorder.slice(0, rootIndex);
    let rightInorder = rootIndex < inorder.length - 1 ? inorder.slice(rootIndex+1, inorder.length) : [];
    
    let leftPreorder = preorder.filter(val => !rightInorder.includes(val));
    let rightPreorder = preorder.filter(val => !leftInorder.includes(val));
        
    root.left = recursiveBuild(leftPreorder.slice(), leftInorder.slice());
    root.right = recursiveBuild(rightPreorder.slice(), rightInorder.slice());
    return root;
}
