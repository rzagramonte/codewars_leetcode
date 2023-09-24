/*
Sum of Minimums!

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)

Will the parameter always be an array?
Will the elements of the input array always be arrays?
Will the elements of the nested arrays in the input array always be numbers?
Will the return always be a number?

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9);
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76);
*/

//declare constant variable which will be assigned to an arrow function
//set parameter arr
//map over arr pulling in the min number of each nested array as the element in the new array
//reduce the array to one value by addition
const sumOfMinimums = arr => arr.map((e,i)=>Math.min(...e)).reduce((a,c)=>a+c,0);
