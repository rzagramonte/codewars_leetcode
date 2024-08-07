/*
To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.

Will the argument passed into the function always be an array of positive integers?
Will the return always be an array of positive integers?

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]), [ 2, 9, 3, 49, 4, 1 ]);
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ]), [ 10, 10201, 25, 25, 1, 1 ]);
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ]), [ 1, 4, 9, 2, 25, 36 ]);

TODO:
create new array
iterate over input array
if square root of element is an integer return the square root, else return the number squared
*/

const squareOrSquareRoot = a => a.map(n=>Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : Math.pow(n,2));