/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let counter = 0;
    
    const dfs = (i, j) => {
    
        if(i < 0 || j >= grid[0].length || i >= grid.length || j < 0 || grid[i][j] !== "1" ) return;

        grid[i][j] = -1;   

        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs( i, j + 1);
    
    }
        
    for (var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length; j++){

            if(grid[i][j] === "1"){
                dfs(i,j);
                counter +=1;
            }
        }
    }
    
    

    
    return counter;
};

