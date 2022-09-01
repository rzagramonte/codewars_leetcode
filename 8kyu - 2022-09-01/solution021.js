/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
P.R.E.P.
parameters: an array of numbers
return: a number
examples: For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
pseudocode:
declare a function
set parameter for the array of numbers to numbers
set squaredNums as a variable to hold the value of each element in the array squared
use map to square each element
use reduce method to reduce the new array to one value
return the final value
*/

function squareSum(numbers){
 let squaredNums = numbers.map(num => num ** 2);
 return squaredNums.reduce((acc, c)=>acc + c, 0);
}