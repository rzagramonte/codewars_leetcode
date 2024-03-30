/*
Possibilities Array

A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Examples:

[1,2,0,3] => True
# Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

[0,1,2,2,3] => False
# Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

[0] => True
# Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).

Will the argument passed into the function's parameter always be an array?
Will the elements of the input array always be numbers?
Will the return always be a boolean of true or false?

console.log(isAllPossibilities([0,1,2,3]), true);
console.log(isAllPossibilities([1,2,3,4]), false);
*/

//sort the array in ascending order
//create empty array to store 0s and 1s
//iterate over x
//if element equals in value to index, push 1 to p else push 0
//return true or false if every element in p is truthy
const isAllPossibilities = x => {
    x = x.sort((a,b)=>a-b);
    let p = [];
    for(let i = 0; i < x.length; i++){
      if(x[i] == i) p.push(1);
      else p.push(0);
    };
    return p.every(p=>p);
};