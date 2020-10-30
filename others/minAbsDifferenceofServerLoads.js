/*There are some processes that need to be executed. Amount of a load that process causes on a server that runs it, is being represented by a single integer. Total load caused on a server is the sum of the loads of all the processes that run on that server. You have at your disposal two servers, on which mentioned processes can be run. Your goal is to distribute given processes between those two servers in the way that, absolute difference of their loads will be minimized.
Given an array of n integers, of which represents loads caused by successive processes, return the minimum absolute difference of server loads.
Example 1:
Input: [1, 2, 3, 4, 5]
Output: 1
Explanation:
We can distribute the processes with loads [1, 2, 4] to the first server and [3, 5] to the second one,
so that their total loads will be 7 and 8, respectively, and the difference of their loads will be equal to 1.
retrieved from https://leetcode.com/discuss/interview-question/356433/*/

//Considering this as a 0/1 knapsack problem, we want to find a subarray that is closest to the half ot the total load. 
//I make a table of Nxm length where N is the length of the proccesses array and m is the sum of all processes of all loads divided by 2
const minAbsDifferenceofServersLoads = function(processes){
    let N = processes.length;
    //get the sum of all the proccesses in the array
    let totalProccessSum = processes.reduce((acc,a) => acc+a);
    //one serve will take half of the sum of all processes, so the dp table's columns will have total proccess sum / 2
    let m = Math.floor(totalProccessSum/2);
    //create a dp table base on the 0/1 knapsack problem
    let dp = new Array(N + 1);
    //making the table length of input array x sum_of_all_processes/2
    for (var j = 0;j < N + 1; j++){
       dp[j] = new Array(m + 1).fill(0);
    }

    for (var row = 1; row < N+1; row++){
        let currNum = processes[row - 1];
        // console.log('Current: ', currNum);
        for (var col = 1; col < m + 1; col++){
            //if the current process is higher than the column index, compare values
            if(col >= currNum) {
                //representing wherever we choose the current process or we don't choose it and get the process before instead
                // get the maxium between the value of the cell right above the current one, or the currentNum + the number in cell[row-1][col - currentNum]
                dp[row][col] = Math.max(dp[row - 1][col], currNum + dp[row - 1][col - currNum]) }
            else {
                //if not, get the value from the cell above current 
                dp[row][col] = dp[row-1][col];   }
        }
    }
    console.log(dp);
    return (totalProccessSum - dp[N][m]) - dp[N][m];
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [10,10,9,9,2];
let arr3 = [1];
console.log(minAbsDifferenceofServersLoads(arr1)); //1
console.log(minAbsDifferenceofServersLoads(arr2)); //0
console.log(minAbsDifferenceofServersLoads(arr3)); //1
