/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.

What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.

P.R.E.P.
parameters: an array of numbers; can be negative or non-integer or not contain any numbers at all
return: sum of the numbers
examples:
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
pseudocode:
declare a function
set 1 parameter for the array
use reduce method
set the initial value to 0
return the sum
*/

function sum(numbers){
    "use strict";
    return numbers.reduce((acc,c) => acc + c, 0);
};