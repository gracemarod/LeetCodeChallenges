/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    
    let visited = new Map();
    const getClonedNode = (node) => {
        
        if (node!==null){
            if(!visited.has(node)){ 
                let temp = new Node(node.val,null,null);
                visited.set(node,temp);
            }
                return visited.get(node);
            } 
        return null;
    }
        
    

    if (head===null) return head;
    
    let oldNode = head;
    
    let newNode = new Node(oldNode.val,null,null);
    visited.set(oldNode,newNode);
    
    while(oldNode!==null){
        
        newNode.random = getClonedNode(oldNode.random);
        newNode.next = getClonedNode(oldNode.next);
        
        oldNode = oldNode.next;
        newNode = newNode.next;
        
    }
    return visited.get(head);
    
};