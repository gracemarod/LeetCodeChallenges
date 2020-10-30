let arr = [5 , 1, 12, -5, 16, 2, 14];
console.log('Unsorted array: ', arr);
let selectionSort = function(nums){
    let len = nums.length;
        for(var i = 0; i < len; i++ ){
            let temp = nums[i];
            let inxMin = i;
            for(var j = i+1; j < len; j++){
                if(nums[j] < temp){
                    temp = nums[j];
                    inxMin = j;
                }
            }
            nums[inxMin] = nums[i];
            nums[i] = temp;
            
        }
        console.log('Selection Sort: ', nums);     
}

let insertionSort = function(nums){

    for (var i = 1; i < nums.length; i++){
        let temp = nums[i];
        let j = i;
        while( j > 0 && temp < nums[j-1]){         
            nums[j] = nums[j-1];
            console.log(nums);
            j--;
        }
        nums[j] = temp; 
    }
    console.log('Insertion Sort: ', nums);
}

let mergeSort = function(nums){
    
    let len = nums.length;
    if (len < 2) return nums;

    let mid = Math.floor(len/2);

    let left = nums.slice(0,mid);
    let right = nums.slice(mid);

    console.log(left,right);
    return merge(mergeSort(left),mergeSort(right));
}

let merge = function(left, right){
    let res  = [];
    let lenL = left.length;
    let lenR = right.length;
    
    let i = 0;
    let j = 0;
    // console.log(left,right);

    while(i < lenL && j < lenR) {
        let temp = left[i];
            if(temp < right[j]){
                res.push(temp);
                i++;
            }else{
                res.push(right[j]);
                j++;
            }
    } 
    //understand this
    let leftRes = left.slice(i);
    let rightRes = right.slice(j);
    return res.concat(left.slice(i)).concat(right.slice(j));
}

// console.log('Merge Sort:', mergeSort(arr));

//initiliaze left with 0 and right with array length - 1
let quicksort = function(nums, left, right){
    let len = nums.length - 1;
    //base case
    if(left < right){
        //in this case, we're going to select the pivot for the last element in the array
        let pivot = right;
        //get the last calculated partition index
        let partitionInd = partition(nums, pivot, left, right);
        //sort the left side of the array
        quicksort(nums, left, partitionInd - 1);
        //sort the right side of the array
        quicksort(nums, partitionInd + 1, right);
    }

    return nums;
}

let partition = function(nums, pivot, left, right){
    let partitionValue = nums[pivot];
    //Index of partition would start wherever left index is in array
    let partInd = left;
    for(var i = left; i < right; i++){
        //if the element is smaller than the partition value, we swap it with the position of the partInd, and partInd is added 1
        //Note: Usually for the first iterations, the first elements would be swapped with themselves
        if(nums[i] < partitionValue){
            swap(nums, i, partInd);
            partInd+=1;
        }
    }
    //swap the last element (pivot value) with the partInd. This is so the pivot value can be in the position it's supposed to be in the array
    swap(nums, right, partInd);
    return partInd;
}
//helper function to swap values
let swap = function(nums, i, j){
    console.log('swap: ', nums[i], ' with ', nums[j]);
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

console.log('Quicksort: ', quicksort(arr, left = 0, right = arr.length - 1));