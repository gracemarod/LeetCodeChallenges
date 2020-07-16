/* 359. Logger Rate Limiter

Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.

Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.

It is possible that several messages arrive roughly at the same time.

Example:
Logger logger = new Logger();
// logging string "foo" at timestamp 1
logger.shouldPrintMessage(1, "foo"); returns true; 
// logging string "bar" at timestamp 2
logger.shouldPrintMessage(2,"bar"); returns true;
// logging string "foo" at timestamp 3
logger.shouldPrintMessage(3,"foo"); returns false;
// logging string "bar" at timestamp 8
logger.shouldPrintMessage(8,"bar"); returns false;
// logging string "foo" at timestamp 10
logger.shouldPrintMessage(10,"foo"); returns false;
// logging string "foo" at timestamp 11
logger.shouldPrintMessage(11,"foo"); returns true;*/

/**
 * Initialize your data structure here.
 */
//Grace
var Logger = function() {
    this.hash = new Object();
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {

    if(this.hash[message] !== undefined){
        if(timestamp - this.hash[message] >= 10){
            this.hash[message] = timestamp;
            return true;
        }else{
            return false
        }
    }else{
         this.hash[message] = timestamp;
         return true;
    }
};

/** 
 * Your Logger object will be instantiated and called as such: */
const obj = new Logger();
const param_1 = obj.shouldPrintMessage(1,'foo'); //true
const param_2 = obj.shouldPrintMessage(2,'bar'); //true
const param_3 = obj.shouldPrintMessage(3,'foo'); //false
const param_4 = obj.shouldPrintMessage(8,'bar'); //false
const param_5 = obj.shouldPrintMessage(10,'foo'); //false
const param_6 = obj.shouldPrintMessage(11,'foo'); //true
