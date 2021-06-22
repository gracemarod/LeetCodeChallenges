/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const n = nums.length;
    if(n < 3) return [];
    
    let res = [];
    //go though array 
    //initiliaze left and right pointer
   
    nums.sort((a,b)=>a-b);

    for (let i = 0; i < n; i++){
        
        if (nums[i] > 0) break;
        
        if (i === 0 || nums[i] !== nums[i - 1]) {
   
            let low = i + 1;
            let numsSet = new Set();
            while(low < n ){
                const complement = -nums[i] - nums[low];
                if(numsSet.has(complement)){
                        res.push([nums[i], nums[low], complement]);
                        while (low + 1 < n && nums[low] === nums[low+1])low++;
                    }
                    numsSet.add(nums[low]);
                    low++; 
                } 
        
        }
            
        
            
            
    
    }
    return res;
};