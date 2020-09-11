/* Binary Search
Given a sorted (in ascending order) integer array nums of n elements and a target value, 
write a function to search target in nums. If target exists, then return its index, otherwise return -1.
*/


let search = function(nums, target) {
    
    let left = 0;
    let middle = 0;
    let right = nums.length - 1;

    while(left <= right){
        middle = left + Math.floor((right-left)/2);
        if(target === nums[middle]) return middle;
        if (target < nums[middle]){
            right = middle - 1;
        }else{
            left = middle + 1;
        }
    }
    return -1;
};

let arr = [-1,0,3,5,9,12];
let target = 9;
console.log(search(arr,target));

/* Note: While I know this is one of the standard ways to implement binary search on a sorted array, I'm adding it to my github because after a 
couple of hours of trial and error, I was able to come up with the solution myself. */

