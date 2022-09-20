/*
Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
P.R.E.P.
parameters: x a non-empty array of numbers
return: the product of all the numbers
examples:
input => output
[1,1,1,1,1] => 1
[8,6,7,4,5,3] => 20160
pseudocode:
declare function
set parameter x
append x to the reduce function multiplying all the values to return the product
*/

function grow(x){
    return x.reduce((acc, c) => acc * c, 1);
  }