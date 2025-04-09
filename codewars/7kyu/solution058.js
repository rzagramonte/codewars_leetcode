/*
Find min and max

Implement a function that returns the minimal and the maximal value of a list (in this order).

Will the parameter always be an array?
Will the elements in the input array always be numbers?
Will the return always be an array?
Will the elements of the output array always be numbers?
Will the elements of the output be array be two numbers, the first element being the minimal value of the input array and the second element being the maximal value of the input array?

console.log(getMinMax([1]),[1,1);
console.log(getMinMax([1,2]),[1,2]);
console.log(getMinMax([2,1]),[1,2]);
*/


//declare constant variable which will be assigned to an arrow function
//set parameter
//create new array using square bracket notation
//first element is the min number of arr
//second element is the max number of arr
const getMinMax = arr => [Math.min(...arr),Math.max(...arr)];
