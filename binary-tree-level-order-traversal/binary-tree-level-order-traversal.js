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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) return [];
    let queue = [root];
    let res = [];
    
    while(queue.length > 0){
        let size = queue.length;
        let levels = [];  
        for (var i = 0; i < size; i++){
            let curr = queue.shift();
            
            levels.push(curr.val);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }        
        res.push(levels)
    }
    return res;
    
};