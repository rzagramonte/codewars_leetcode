/*
Calculate average
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
P.R.E.P.
parameter: an array of numbers
return: the average of the numbers or 0 if the array is empty
example:
input => output
[7,6,8,5,4,9] => 6.5
[5,42,1] => 16
[] => 0
pseudocode:
declare function
set parameter
set if else statment using ternary operator
if empty array return 0 else return array.reduce()/array.length
*/

function findAverage(array) {
    // your code here
    return array.length === 0 ? 0 : array.reduce((acc,c)=> acc + c, 0) / array.length;
  }