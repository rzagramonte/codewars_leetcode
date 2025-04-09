/*
Find the smallest integer in the array
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

Will the parameter always be an array?
Will the elements in the array always be numbers?
Will the numbers always be integers?
Will the return always be a number?
Will the number always be an integer?

let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,8]),8);
console.log(sif.findSmallestInt([78,56,232,12,18]),12);
console.log(sif.findSmallestInt([78,56,232,412,228]),56);
console.log(sif.findSmallestInt([78,56,232,12,0]),0);
console.log(sif.findSmallestInt([1,56,232,12,8]),1);
*/

// create class
class SmallestIntegerFinder {
  // create arrow function in class
  // set parameter
  // return the smallest number in the array
    findSmallestInt = args => Math.min(...args);
  }
