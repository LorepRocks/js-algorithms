// If your list is already sorted, binary search takes O(log n)
// as the size of the array is halved each pass through.
//Buf if you have to sort the array first, binary search will take
//O(n log n) time to complete

function binarySearch(list, item){ //O(log n)
    //sort the list in ascending order
    list.sort((a,b) => a - b); //O(n)

    let low = 0;
    let high = list.length;

    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if(guess === item){
            return true;
        }
        if(guess < item){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return false;
}

let list = [4,16,1,32,8];
console.log(binarySearch(list, 8));