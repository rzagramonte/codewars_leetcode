/*
Simple Fun #259: Different Digits Number Search

Task
Given an array of integers arr, find the leftmost number that has a decimal representation which doesn't contain any digit more than once. If there is no such number, return -1 instead.

Input/Output
[input] array.integer arr

Array of positive integers.

2 ≤ inputArray.length ≤ 100000,

10 ≤ inputArray[i] ≤ 10000000.

[output] an integer

Example
For arr = [22, 111, 101, 124, 33, 30], the output should be 124

For arr = [1111, 404], the output should be -1.


Will the argument passed into the function always be an array of numbers?
Will the return always be a number?

*/

/*
TODO:
iterate over array
find the element that satisfies the callback
callback: return true or false if the length of the number as a string is equal in value to the size of the same string in a set
if false, return -1
*/
const differentDigitsNumberSearch = arr => arr.find(e=>`${e}`.length == new Set(`${e}`).size) || -1;

console.log(differentDigitsNumberSearch([22, 111, 101, 124, 33, 30]),124);
console.log(differentDigitsNumberSearch([1111, 404]),-1);
console.log(differentDigitsNumberSearch([10, 11, 12, 13]),10);