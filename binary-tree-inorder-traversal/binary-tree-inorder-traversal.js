/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ans = [];
    
    function inorderRecursion (root){
        if(root !== null) {
            inorderRecursion(root.left);
             ans.push(root.val);
            inorderRecursion(root.right); 
        }
           
    }; 
    
    inorderRecursion(root);
    
    return ans;
 
};