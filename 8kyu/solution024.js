/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]


Will the parameters always be two numbers?
Will the return always be an array?
Will the array's elements always be numbers?

console.log(countBy(1,10), [1,2,3,4,5,6,7,8,9,10]);
console.log(countBy(2,5), [2,4,6,8,10]);
*/

//declare variable and assign to arrow function
//create array using Array() constructor
//first parameter is the length of the array
//second parameter is a callback function iterating over each element in the array and multipling the current index +1 by x
const countBy = (x, n) => Array.from({length: n}, (element, index) => (index+1) * x);