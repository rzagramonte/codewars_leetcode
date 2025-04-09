/*
Remove duplicates from list

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

Will the parameter always be an array of numbers?
Will the return always be an array of numbers?

console.log(distinct([1]), [1]);
console.log(distinct([1,2]), [1,2]);
console.log(distinct([1,1,2]), [1,2]);
*/


//declare function and set parameter
function distinct(a) {
    //return filtered array using filter method
    //using indexOf method, should return the element at the first index in which element is found
    return a.filter((element,index)=> a.indexOf(element) === index);
  }