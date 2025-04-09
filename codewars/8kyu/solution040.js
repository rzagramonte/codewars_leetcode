/*
Calculate average
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

Will the parameter be an array?
Will the return be a number?

console.log(findAverage([1,1,1]), 1);
console.log(findAverage([1,2,3]), 2);
console.log(findAverage([1,2,3,4]), 2.5);
*/

//declare variable and assign to arrow function
//set parameter
//if the length of the array is truthy, return the array reduced to one number by adding all the elements and then dividing by the length of the array
//else return 0
const findAverage = array => array.length ? array.reduce((acc,c)=> acc + c, 0) / array.length : 0;