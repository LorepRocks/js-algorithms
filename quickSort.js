'use strict'
/* like merge sort, quick sort is also a 'divide and conquer' algorithm. it picks an element as a pivot 
element and partitions the array around the pivot.

There are several methods to pick a pivot element:
 - Always pick the first element
 - Always pick the last element
 - Pick a random element
 - Pick the median element

 Quick sort has a runtime of O(n log n)
 */

 function quickSort(array){
     if(array.length < 2) return array;

     let pivotIndex =  Math.floor(array.length / 2);
     let pivot = array[pivotIndex];
     let less = [];
     let greater = [];

     for(let i in array){
        if(i !== pivotIndex){
            array[i] > pivotIndex ? greater.push(array[i]) : less.push(array[i]);
        }
     } 
     return [...quickSort(less), pivot, ...quickSort(greater)]
 }

 const array=[4,16,1,32,8];
 const finalArray = quickSort(array);
 console.log(finalArray);