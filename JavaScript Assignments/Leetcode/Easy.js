//#region Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
/*
The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/
function createCounter(init){
    let current = init;
    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => (current=init)
    }
}
var counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
//#endregion 

//#region Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
/*
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
without the built-in Array.map method.
*/
var map = function(arr,fn){
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(fn(arr[i],i));
    }
    return result;
}
//#endregion