/*
Invert values
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

Will the parameter be an array?
Will the elements in the array be numbers?
Can there be an empty array?
Will the return always be an array?

console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
console.log(invert([]), []);
console.log(invert([0]), [-0]);
*/
//declare variable and assign to arrow function
//set parameter
//if the length of the array is truthy return a new array where each element is negated
//else return the input array
const invert = array => array.length ? array.map(element=>-element) : array;