

class Solution {
    public int reverse(int x) {
        if(x == 0) {
            return 0;
        }
        
        long resp = 0;
    
        while(x != 0){
            int last_digit = x % 10;
            resp = resp * 10 + last_digit;
            x /= 10;
        }
        
        if( resp > Integer.MAX_VALUE || resp < Integer.MIN_VALUE) {
            return 0;
        }else{
            return (int) resp;
        }
     
        
    }
    
}