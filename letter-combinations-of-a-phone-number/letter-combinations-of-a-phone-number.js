/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    //creating a hasmap
    //split digits
    //backtrack(comb,i)
    //  check if i > digits.length 
    //  
    if(digits === '') return [];
    const numMap = {2:'abc',3:'def',4:'ghi', 5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};
    let res = [];
    
    const backtrack = (currComb, inx) => {
        if  (inx === digits.length){
            res.push(currComb.join(''));
            return;
        }
        if( inx > digits.length){ 
            return;
        }
        let letters = numMap[parseInt(digits[inx])].split('');

        for (let i = 0; i < letters.length; i++ ){
            
            currComb.push(letters[i]);
            
            backtrack(currComb, inx+1);
            
            currComb.pop();
        
        }
    
    }
    
        backtrack([],0);

        return res;
    
};