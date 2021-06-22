/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // return an arr of the indices 
    // create left and right pointer
    // initialize left to 0 and right pointer to length of num 
    // use while loop to go through array, would add one to left pointer when right === left  
    // initialize right pointer
    // return array of indices if sum === target
    let n = nums.length;
    
    if (n === 2) return [0,1];
    
    let left = 0;
    
    let res = [];
    
    let numsMap = {}
    for(let inx = 0; inx < n; inx++){
        let complement = target - nums[inx];
        if(numsMap[complement] !== undefined) return [inx, numsMap[complement]];
        numsMap[nums[inx]] = inx;                      
    };
    
    
    

    
    
};