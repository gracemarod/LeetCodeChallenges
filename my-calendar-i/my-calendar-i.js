
var MyCalendar = function() {
    // interval
    this.Calendar = [];
    
};

/*
[[], [10, 20], [15, 25], [20, 30], [5,8], [1,3], [6,9]]
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
                  -----------------------------
                                  ----------------------------                x
                                                -----------------------------
        ------
----
          -------
res = [[10,20]] ==> [[5,8],[10,20] ] 
*/

// sort based on end Time
// saved the the event that ends the latest
//

// currStartTime >= maxEndTime, you can save it and sort
// else return false


// 


/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let currMaxEndTime = 0;
    let res = [];
    const n = this.Calendar.length;
    if(n === 0) {
        this.Calendar.push([start,end]);
        return true;
    };
    
    for(let i = n - 1; i >= 0 ; i--){
        let currCalStart = this.Calendar[i][0];
        let currCalEnd = this.Calendar[i][1];
        
        if( start < currCalEnd && end > currCalStart) return false;

    }
    
    this.Calendar.push([start,end]); 
    return true; 
   


};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */