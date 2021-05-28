/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    //
    //bakctracking(comb, i)
    //if(comb.length > k) push to result stop 
    //iterate from 1 to n
    //push current num to curr comb
    //backtrack recursion
    //pop from current combination aray
    
    let res = [];
    
    const backtrack = (comb, start) => {
        if(comb.length > k) return;
        
        if(comb.length === k){
            res.push([...comb]);
            return;
        }
        
        for (let i = start; i <= n; i++){
            comb.push(i);
            
            backtrack(comb,i+1);
            
            comb.pop();
        }
    }
    
    backtrack([], 1);
    
    return res;
};