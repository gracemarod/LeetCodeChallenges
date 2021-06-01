/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    /*initiate a max variable
      iterate from right to left
      check if current num is less than curr max, 
      if true add index to result array shift?
    */
    let n = heights.length - 1;
    let max = heights[n];
    let res = [n];
    
    for(var i = n - 1; i >= 0; i--){
        let curr = heights[i];
        if (curr > max) res.unshift(i); 
        max = (max < curr)?curr:max;
    }
    
    return res;
};