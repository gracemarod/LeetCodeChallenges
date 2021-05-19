/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n = nums.length;
    if(n === 1) return nums;
    
    return quicksort(nums,0,n-1);
};

const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

const partition = (arr,pivot,left,right) =>{
    let pivotVal = arr[pivot];
    let partitionInx = left;

    for(let i = left; i < right; i++){
        if(arr[i] < pivotVal){
            swap(arr,i, partitionInx);
            partitionInx++;
        }
    }
    swap(arr, right, partitionInx);
    return partitionInx;
    
}
const quicksort = (arr,left,right) => {
    let n = arr.length;
    let pivot = 0;
    let partitionIndex = 0;
    
    if(left < right){
        pivot = right;
        partitionIndex = partition(arr,pivot,left,right)
        
        //sort left and right
        quicksort(arr,left,partitionIndex-1);
        quicksort(arr,partitionIndex+1,right);
    }
    return arr;
}



