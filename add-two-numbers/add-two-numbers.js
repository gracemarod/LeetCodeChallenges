/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newList = new ListNode();
    let dummy = newList;
    let carry = 0;
    
    while(l1 !== null || l2 !== null){
        
        let num1 = ( l1 !== null ) ? l1.val: null;
        let num2 = ( l2 !== null ) ? l2.val: null;
        
        let tempSum = 0;
        if(num1 === null) tempSum = num2 + carry;
        else if (num2 === null) tempSum = num1 + carry;
        else tempSum = num1 + num2 + carry;
        //console.log('Temp Sum', tempSum);
        
        carry = Math.floor(tempSum/10);
        tempSum = tempSum%10;
        
        newList.next = new ListNode(tempSum,null);
        newList = newList.next;
        //console.log('New node val', newList.val);
       
        //console.log('L1 val', l1.val, 'L2 Val', l2.val);
        if(l1 && l1.next) l1 = l1.next;
        else l1 = null;
        if(l2 && l2.next) l2 = l2.next;
        else l2 = null;
    }
    if(carry !== 0) {
        newList.next = new ListNode(carry);
        newList = newList.next;            
    }
    return dummy.next;
};