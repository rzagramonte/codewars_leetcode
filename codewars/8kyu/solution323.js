/*
Find the first non-consecutive number

Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

Will the parameter always be an array?
If the input array has elements, will they always be numbers?
Will the numbers always be unique?

console.log(firstNonConsecutive([1,2,3,4,6,7,8]), 6);
console.log(firstNonConsecutive([1,2,3,4]), null);
*/

//iterate over arr
//if the current element minus the previous is greater than 1, return that element
//outside of loop return null
const firstNonConsecutive = arr => {
    for(let i=0; i<arr.length; i++){
      if(arr[i] - arr[i-1] >1) return arr[i];
    };
    return null;
  };