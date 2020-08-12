/* #20. Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()[]{}"
Output: true

Example 2:
Input: "(]"
Output: false*/

var isValid = function(s) {
    if (s.length === 0) return true;
    //hash with characters 
    let hash = {'(':')', '{':'}', '[':']'}
    let stack =   [...s[0]]; 
    
    for (var i = 1; i < s.length; i++){
        let n = stack.length 
        //compare current character from string with previous character iin the stack
        if(s[i] === hash[stack[n-1]] ){
            stack.pop();
        }else{
            stack.push(s[i]);
        }  
    }
    return (stack.length === 0 ? true : false);
};
console.log(isValid("()[]{}")); //true
console.log(isValid("(]"));//false