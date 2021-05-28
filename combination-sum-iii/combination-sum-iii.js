/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    //create backtrack function remain, i, comb, count 
    //if remain < 0 return stop recursion
    //if remain === n, push to result, stop rec
    //if count > k stop reccursion
    //iterate through 1 thorugh n
    //recursion
    //backtrack
    let res = [];
    
    const backtrack = (remain, comb, start) => {
        if(remain < 0 || comb.length > k) return ;
        if (remain === 0 && comb.length === k) {
            res.push([...comb]);
            return;
        }
        for (let i = start; i <= 9; i++){
            comb.push(i);
            
            backtrack(remain - i, comb, i+1);
            
            comb.pop();
        }
        
    }
    backtrack(n, [], 1);
    
    return res;
};