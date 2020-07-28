/*  #728. Self Dividing Numbers

A self-dividing number is a number that is divisible by every digit it contains.
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
Also, a self-dividing number is not allowed to contain the digit zero.
Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:The boundaries of each input argument are 1 <= left <= right <= 10000.
*/

let selfDividingNumbers = function(left, right) {

    let r, d;
    let res = [];
    
    //for loop would test if each number is self-dvidding starting in left variable and ending in right variable


    for (var num = left; num <= right; num++){

         d = num;
         r = num % 10; 
         while (d > 0 && (num%r===0)){
            //r is the reminder of the dividend 
             r = d % 10;
            //d will be will be divided by 10 to get the last digit of the current number
             d = Math.floor(d / 10);
         }
        if(d === 0 && num%r===0){res.push(num);}
    }
return res;                                                 

};