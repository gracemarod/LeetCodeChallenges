class MinHeap {
    constructor() {
        //initialing the array heap and adding a dummy element at index
        this.heap = [];
        // this.selector = selector;
    }

    getMin(){
        //Accessing the min element at index 1 in the heap array
        return this.heap[1];
    }

    //insert node to minheap
    insert(node){
       
        let current = this.heap.length;
        this.heap.push(node);
        //traversing up the parent node until the current node (current) is greater than the parent (current/2)
        while(current > 0 && this.heap[Math.floor((current)/2)] > this.heap[current]){
 
            //swapping the two nodes
            swap(this.heap, current, Math.floor((current)/2));
  
            current =  Math.floor((current)/2);
        }
        
    } 

    remove(){
        
        if (this.heap.length < 2) {
            console.log('Heap is already empty');
            return null;}
        //if there is only one item in the heap, use splice to return the heap empty
        if(this.heap.length === 2) return this.heap.splice(this.heap.length - 1);
        
        //replace the first element in the heap, which is the smallest, with the last element of the heap
        this.heap[1] = this.heap.pop();
        
        //pointers for the rood node, the first left child node and the first right child node
        let current = 1;
        let leftChildInx = current * 2;
        let rightChildInx = current * 2 + 1;
        
        while(this.heap[current] > this.heap[leftChildInx] || this.heap[current] > this.heap[rightChildInx]){
            //if the left child node is smaller than the left child, swap current node with left node
            if(this.heap[leftChildInx] < this.heap[rightChildInx]){
                swap(this.heap, current, leftChildInx);
                current = leftChildInx;
            //swap current with right node otherwise
            }else{
                swap(this.heap, current, rightChildInx);
                current = rightChildInx; 
            }
            //update left and child nodes according to change
            leftChildInx = current * 2;
            rightChildInx = current * 2 + 1;
        }
     
    }

}

const swap = function(heap,i,j){
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}

const obj = new MinHeap();
obj.insert(null);
obj.insert(10);
obj.insert(23);
obj.insert(36);
obj.insert(38);
obj.insert(32);
obj.insert(57);
obj.insert(45);

console.log('Insert: ',obj);

obj.remove();
console.log('Remove 1: ', obj);
obj.remove();
console.log('Remove 2: ', obj);
obj.remove();
