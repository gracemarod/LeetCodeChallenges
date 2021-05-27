/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const queue = [];
    const indegree = Array(numCourses).fill(0);
    const adjList = new Map();
    const res = [];
    
    //creat the adjacency list representation of the graph
    for (const [e,v] of prerequisites){
        
        if(adjList.has(v)) adjList.get(v).push(e);
        else adjList.set(v,[e]);
        //build the indegree array
        indegree[e]+=1;
    }
    
    indegree.forEach((a,i) => {
        if(a === 0) queue.push(i);
    });
    
    //go through the graph until the queu is empty
    while(queue.length > 0){
        let curr = queue.shift();
        
        if(adjList.has(curr)){
            let precourses = adjList.get(curr);
            
            for (const c of precourses){
                indegree[c]-=1;
                //when ther indegree of that course becomes empty, add it to the queue
                if(indegree[c] === 0) queue.push(c);
            }
        }
        res.push(curr);
    }
    
    
    return (res.length === numCourses) ? res:[];
};