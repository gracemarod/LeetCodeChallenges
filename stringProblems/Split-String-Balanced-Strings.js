/* #1221.Split a String in Balanced Strings
Description: 
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Constraints:
1 <= s.length <= 1000
s[i] = 'L' or 'R'*/

const balancedStringSplit = (s) => {
    //balVar is be a balanced variable that would be added 1 if there's an L in the String, subtract 1 otherwise 
    let balVar = 0;
    let count = s.split('').reduce((acc,x)=>{
        balVar = (x==='L')? balVar+=1 : balVar-=1;
        //add one to the counter if balVar is 0
        if (balVar===0) acc+=1;
        return acc;
    },0);
    return count;
}
const str = "RLRRLLRLRL";
console.log(balancedStringSplit(str));

