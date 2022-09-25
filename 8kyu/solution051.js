/*
Invert values
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

P.R.E.P.
parameters: an array of numbers
return: the additive inverse of each; positive becomes negative and negative becomes positive
examples:
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
pseudocode:
declare function
set parameter
use ternary operator for if else statement
if empty array return the array
else return => use map method to muliply each element by -1
*/

function invert(array) {
    return array.length === 0 ? array : array.map(element=>element * -1);
  }