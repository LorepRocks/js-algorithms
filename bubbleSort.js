'use strict'

/*bubbleSort is an algorithm where each value in an array is compared to the next and swapped
if the value on the left is grater than the value on the right. BubbleSort is notorious for being
non-performance with runtime of O(n^2) 
*/

//BubbleSort with forLoops

function bubbleSortWithForLoops(arr){
    for(let i= 0; i < arr.length; i++){
        for(let j=0; j < arr.length - i - 1; j++ ){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// BubbleSort with A Do-While Loop
function bubbleSort(arr){
    let swapped = false;
    do{
        swapped = false;
        arr.forEach((item, index) => {
            if(item > arr[index + 1]){
                let temp = item;
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swapped = true;
            }
        });
    } while(swapped)
    return arr;
}

const arr = [4,16,1,32,8];

console.log('Bubble ForLoop', bubbleSortWithForLoops(arr));
console.log('Bubble Do-while', bubbleSort(arr));