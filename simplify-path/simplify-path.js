/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    //iterate through string, 
    //check if current character is /, letter, digit, dot or _
    //also keeps tab on the top element of stack
    //if it's slash then add to the stack
    //if there more than one, just delete
    //if it's digit, keep adding to current until we hit another slash
    //if there are two dots, delete prev path
    if (path.length === 0 || path.length === 1) return '/';
    let stack = [];
    
    let regex = /[A-Za-z0-9_]/;
    let inputArr = path.split('/');
    
    inputArr.forEach((a,inx) => {
        if (a==='..') stack.pop();
        else if(regex.test(a) || a === '...') stack.push(a);   
    });
 
    return '/' + stack.join('/');
};