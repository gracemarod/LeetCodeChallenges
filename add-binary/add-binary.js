/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //  11    1010
    //+  1    1011
    //  100  10101
    
    let carry = 0;
    
    let pa = a.length;
    let pb = b.length;
    
    let res = '';
 
    while (pa > 0 || pb > 0){
        let x = (pa > 0)? parseInt(a[pa-1]):0;
        let y = (pb > 0)? parseInt(b[pb-1]):0;
        
        let temp = (x ^ y)  ^ carry;

        res = temp + res;
        if((x === 1 && y === 1) || (x === 1 && carry ===1) || (y==1 && carry ===1)) carry = 1;
        else carry = 0;
        pa--;
        pb--;
    }
    
    if (carry > 0) res = carry + res;
    return res;
};