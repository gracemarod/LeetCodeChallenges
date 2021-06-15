/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix.length === 0) return 0;
    const m = matrix.length;
    const n = matrix[0].length;

    
    let maxArea = 0;
    
    let dp = new Array(n).fill(0);
    
    for (let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){   
            dp[j] = (matrix[i][j] === '1') ? dp[j] + 1 : 0; 
        }
        maxArea = Math.max(maxArea,getLeftArea(dp));
    }
   
    
    return maxArea
    
};


const getLeftArea = (arr) => {
    
    let heights = [...arr];
    
    let maxarea = 0;
    let stack = [-1];
    
    for (let i = 0; i < heights.length; i++){
        while(stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] >= heights[i]){
            let firstOnStack = stack.pop();
            const otherInx = ( stack[stack.length -1] === -1)? 0: stack[stack.length - 1];
            maxarea = Math.max(maxarea, heights[firstOnStack] * (i - stack[stack.length - 1] -1));
        }
        stack.push(i);
    }
    
    while(stack[stack.length - 1] !== -1){
        maxarea = Math.max(maxarea, heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1));
    }
    
    return maxarea;
    
}