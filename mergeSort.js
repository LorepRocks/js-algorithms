/*
Merge Sort is a "divide and conquer" algorithm which means it divides its input array
into two halves and recursively calls itself on each half, then merges the two sorted halves
back together.

The time complexity of merge sort is 0(n log n)
*/
function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    const middle = Math.floor(arr.length / 2); //O(log n)
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));// recursion O(n)
}

function merge(left,right){
    const sorted = [];
    while(left.length && right.length)
    {
        if(left[0] <= right[0])
        {
            sorted.push(left.shift());
        }else
        {
            sorted.push(right.shift());
        }
    }
    let results = [...sorted, ...left, ...right];
    return results;
}

let arr = [4,16,1,32,8];
console.log(mergeSort(arr));