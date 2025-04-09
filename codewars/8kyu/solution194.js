/*
Enumerable Magic - Does My List Include This?

Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

Will the parameters always be an array of numbers or an empty array and a number?
Will the return always be a boolean of true or false?

console.log(include([1,2,3,4], 3), true);
console.log(include([1,2,4,5], 3), false);
console.log(include([], 3), false);
*/

//declare function and set parameters
function include(arr, item){
    //return true or false if item is included in arr using includes() method
    return arr.includes(item);
  }