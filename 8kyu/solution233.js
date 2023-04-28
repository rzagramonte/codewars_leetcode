/*
Be Concise IV - Index of an element in an array

Be Concise IV - Index of an element in an array
Task
Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

Will the parameter always be an array and an element in the array?
Will the return always be either an element of any data type or the string "Not found"?

console.log(find(array, 5), 2);
console.log(find(array, 11), 4);
console.log(find(array, 3), 1);
console.log(find(array, 2), 0);
console.log(find(array, 7), 3);
console.log(find(array, 1), "Not found");
console.log(find(array, 8), "Not found");
console.log(find(array, "Hello World"), 1);
console.log(find(array, "lorem ipsum"), "Not found");
console.log(find(array, "Lorem Ipsum"), 3);
console.log(find(array, false), 2);
console.log(find(array, true), 0);
console.log(find(array, Math.PI), 5);
console.log(find(array, 3.14), "Not found");
console.log(find(array, 6), 4);
*/

//declare a const variable and assign it to an arrow function
//set the parameters
const find = (a, e) => {
    //declare i and assign it to the index of e in a
    let i = a.indexOf(e);
    //is i equal in value to -1 ? then return "Not found", else return i
    return i == -1 ? "Not found" : i;
  };//add semicolon at the end because this is a function expression