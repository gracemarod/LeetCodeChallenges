/* 270. Closest Binary Search Tree Value
Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note: Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.

Example: Input: root = [4,2,5,1,3], target = 3.714286, Output: 4
*/

function TreeNode(val, left, right ){
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
}

//The first solution I came up with was using recursion

//Use inorder traversal to go through the tree
let closestValueRecursion = function(root, target,res = root.val) {
    if(root===null) return res;
    // Using the ternary operator to update the res value. If the target value minus the current root value is less than target minus the previous res value
    // then the res variable would be updated with the current root val, else it stays the same. 
    res = (Math.abs(target - root.val) < Math.abs(target - res)) ? root.val : res;
    // Since a Binary Search tree is going to have all the smaller values than the root value to the left,
    // if the target us less than the root value, go to the left subtree, else go the right subtree
    if(target < root.val) return closestValueRecursion(root.left,target,res);
    else return closestValueRecursion(root.right, target,res);
};

//In this case, the iterative version is more optimal in space complexity than the recursive version
var closestValueIterative = function(root, target) {
    let res = root.val
    
    while(root !== null){
        res = (Math.abs(root.val - target) < Math.abs(res - target)) ? root.val : res;

        if(target < root.val) root = root.left;
        else root = root.right;
    }
    return res;
}

let one = new TreeNode(1,null,null);
let three = new TreeNode(3,null,null);
let two = new TreeNode(2,one,three);
let five = new TreeNode(5,null,null);
let root = new TreeNode(4,two,five);

console.log(closestValueRecursion(root, 3.714286));
console.log(closestValueIterative(root, 3.014286));
