/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.LRUCache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.LRUCache.has(key)) {
        const val = this.LRUCache.get(key);
        this.LRUCache.delete(key);
        this.LRUCache.set(key,val);
        return val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //console.log(this.LRUCache)
    if (this.LRUCache.has(key)) {
        this.LRUCache.delete(key);
        this.LRUCache.set(key,value);
    }else if (this.LRUCache.size >= this.capacity) {       
        const top = this.LRUCache.keys().next().value;
        this.LRUCache.delete(top);
    }
    this.LRUCache.set(key,value);
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */