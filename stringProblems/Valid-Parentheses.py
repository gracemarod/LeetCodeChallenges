"""
#20. Valid Parentheses
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
Output: false
"""
class Solution:
    def isValid(self,s:str) -> bool:
        if len(s) == 0:
            return True
        #dictionary with characters
        hash = {"(":")", "{":"}","[":"]"}

        stack = [s[0]]
        for i in range(1,len(s)):
            n = len(stack)
            #if stack has element(s), make sure previous character in stack is in hash and compare with current character from string
            if n > 0 and stack[n-1] in hash and s[i] ==  hash[stack[n-1]]:
                stack.pop()
            else:
                stack.append(s[i])

        if len(stack) > 0:
            print(False)
            return False
        else:
            print(True)
            return True
            
res = Solution()
res.isValid("(]")
res.isValid("()[]")