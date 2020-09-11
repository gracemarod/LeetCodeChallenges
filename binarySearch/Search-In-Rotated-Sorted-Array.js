/* 33. Search in Rotated Sorted Array
You are given an integer array nums sorted in ascending order, and an integer target.
Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
If target is found in the array return its index, otherwise, return -1.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

*/

let search = function(nums, target) {

    //make a hash map to save all numbers in the array with their initial index
    let hashNums = {};
    for (var i in nums){
        if(hashNums[nums[i]] === undefined) hashNums[nums[i]] = i;
    }

    nums = nums.sort((a,b)=> a-b);
    
    let left, mid;
    left = mid = 0;
    let right = nums.length - 1;
    
    //do binary search
    while(left <= right){
        mid = left + Math.floor((right - left)/2);
        if (nums[mid] === target){
            //return index of initial array
            return hashNums[nums[mid]];
        }else if ( target < nums[mid]){
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    return -1;
}
let nums = [4,5,6,7,0,1,2];
let target = 3;
console.log(search(nums,target));