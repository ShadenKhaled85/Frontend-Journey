
var array = [1,2,3,4,5,6];

//#region Taking Array as Input
var arrayInput = prompt("Enter array of numbers separated by space");
var arrSplit = arrayInput.split(' ').map(Number);
console.log(arrSplit);
//#endregion

//#region Find the Sum of All Elements 
function sumArray(arr){
    let sum=0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumArray(array));
//#endregion


//#region Find the Maximum Number in an Array
function maxElement(arr) {
    let max = arr[0]; // assume
    for(let num of arr){
        if(num>max)
            max=num;
    }
    return max;
}
console.log(maxElement(array));
//#endregion


//#region Reverse an Array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); // to push(add) the last element from arr to be the first element in reversed
    }
    return reversed;
}
console.log(reverseArray(array));

/* WITHOUT USING PUSH */
function reverseArr(arr){
    let reversed = new Array(arr.length); // Create an empty array with the same length
    for (let i = 0; i < arr.length; i++) {
        reversed[arr.length - 1 - i] = arr[i]; // Assign elements in reverse order
    }
    return reversed;
}
console.log(reverseArr(array));
//#endregion 


//#region Remove Duplicates from an Array
function removeDuplicates(arr){
    var unique = [];
    for(let num of arr){
        if(!unique.includes(num)){ // If an element is not already in unique, add it.
            unique.push(num);
        }
    }
    return unique;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 3, 5])); 

/* WITHOUT USING INCLUDES */
function removeDuplic(arr){
    let seen = {}; // object to track numbers we've already added
    let unique = [];
    for(let num of arr){
        if(!seen[num]){
            unique.push(num);
            seen[num] = true; // mark this number as seen
        }
    }
    return unique
}
console.log(removeDuplic([1, 2, 3, 2, 4, 3, 5])); 
//#endregion


//#region Filter Even Numbers from an Array
function filterEvenNumbers(arr){
    let evenArr = [];
    for(let num of arr){
        if(num%2==0){
            evenArr.push(num);
        }
    }
    return evenArr;
}
console.log(filterEvenNumbers(array)); 

//#endregion


//#region Check If an Array Contains a Specific Value
function containsValue(arr, value) {
    for(let num of arr){
        if(num === value){
            return true
        }
    }
    return false;
}
console.log(containsValue([10, 20, 30, 40], 30)); 
//#endregion


//#region Merge Two Arrays and Remove Duplicates
function mergeArrays(arr1, arr2) {
    let merged = arr1.concat(arr2);
    return removeDuplicates(merged);
}
console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]

/* WITHOUT USING CONCAT()*/
function mergeArr(arr1,arr2){
    let merged=[];
    for(let num of arr1){
        merged.push(num);
    }
    for(let num of arr2){
        merged.push(num);
    }
    return removeDuplicates(merged);
}
console.log(mergeArr([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]

/* WITHOUT USING PUSH()*/
function mergeArray(arr1,arr2){
    let merged=[];
    let index=0;
    for (let i = 0; i < arr1.length; i++) {
        merged[index] = arr1[i];
        index++;
    }
    for (let j = 0; j < arr2.length; j++) {
        merged[index] = arr2[j];
        index++;
    }
    return removeDuplicates(merged); 
}
console.log(mergeArray([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]
//#endregion


//#region Find the Index of an Element
function findIndex(arr,element){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===element){
            return i
        }
    }
    return -1; // If not found, return -1.
}
console.log(findIndex([5, 10, 15, 20], 15)); 

//#endregion


//#region Sort an Array in Ascending Order
/* BUBBLE SORT */
function bubbleSort(arr){
    let sorted = [...arr]; // copy to avoid modifying the original
    let arrLength = sorted.length;    
    for(let i=0; i<arrLength-1; i++){
        for(let j=0; j<arrLength-1-i; j++){
            if(sorted[j] > sorted[j+1]){
                let temp = sorted[j+1];
                sorted[j+1] = sorted[j];
                sorted[j] = temp;
            }
        }
    }
    return sorted;
}
console.log(bubbleSort([4, 2, 8, 1, 5])); // Output: [1, 2, 4, 5, 8]

function sortArray(arr){
    let sorted = [...arr];
    for(let i=0; i < sorted.length; i++){
        for (let j = 0; j < sorted.length-1; j++) {
            if (sorted[j] > sorted[j+1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]]; // swap elements
            }
        }
    }
    return sorted;
}
console.log(sortArray([4, 2, 8, 1, 5])); // Output: [1, 2, 4, 5, 8]
//#endregion


//#region Find the Index of an Element

//#endregion
