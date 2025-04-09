/*
Sum without highest and lowest number

Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

P.R.E.P.
parameters: an array
return: a number
example:
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
pseudocode:
declare function
set parameter
find min and max add them and substract them from array.reduce()

*/

function sumArray(array) {
    let minMax = Math.min(...array) + Math.max(...array);
    let reduceArr = array.reduce((acc,c)=>acc+c,0);
    return reduceArr - minMax;
}