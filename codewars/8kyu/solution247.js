/*
Find numbers which are divisible by given number

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

Will the parameters always be an array and a number?
Will the elements in the input array always be numbers?

console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1,3,5], 2), []);
*/

//declare const variable and assign to arrow function
//filter array out by all numbers that are not divisable by the divisor
const divisibleBy = (numbers, divisor) => numbers.filter(number=>number%divisor==0);