/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(node === null) return node;
    
    let visited = new Map();
    
    let newNode = new Node(node.val,[]);
    visited.set(node, newNode);
    let queue = [];
    
    queue.push(node);
    
    while(queue.length > 0){
        
        let curr = queue.shift();
        let neighbors = curr.neighbors;
        
        let size = neighbors.length;
        
        for(var i = 0; i < size; i++){
            if(!visited.has(neighbors[i])){
                visited.set(neighbors[i], new Node(neighbors[i].val,[]));
                queue.push(neighbors[i]);
            }
            visited.get(curr).neighbors.push(visited.get(neighbors[i]));
           
        }
    }
    return visited.get(node);
};