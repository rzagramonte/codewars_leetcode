/*
No oddities here

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

Will the parameter always be an array?
Will the elements of the array always be numbers?
Will the return always be an array?
Will the elements of the returned array always be numbers?

console.log(noOdds([0,1]), [0]);
console.log(noOdds([0,1,2,3]), [0,2]);
*/

//declare const variable and assign to arrow function
//set parameter
//filter out elements that are even
//const noOdds = values => values.filter(value => value % 2 == 0);

//refactored code:
const noOdds = values => values.filter(value => !(value % 2));