/*
Beginner - Lost Without a Map
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
P.R.E.P.
parameters: an array of numbers
return: a new array with each number in the array doubled
examples:
[1, 2, 3] --> [2, 4, 6]
pseudocode:
declare function
set parameter
return arr appended to the map function and multiply each element times two
*/

function maps(x){
    return x.map(element=>element * 2);
}