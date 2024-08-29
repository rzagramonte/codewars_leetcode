/*
Basics 04: Rotate Matrix

Your task is to rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m. So this kata checks some basics, it's not too difficult.

There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...

One easy example:

Input: {{-1, 4, 5},
        { 2, 3, 4}}

Output: {{ 5, 4},
         { 4, 3},
         {-1, 2}}
First there are some static tests, later on random tests too...


Hope you have fun:-)!

Will the argument passed into the function always be an array of arrays of numbers?
Will the return always be be an array of arrays of numbers?

console.log(rotateMatrix([[-1, 4, 5], [2, 3, 4]]), ([[5, 4], [4, 3], [-1, 2]]);

TODO:
reverse each element (array) in the input array
go through each column and make a row of the columns elements
*/

const rotateMatrix = matrix => matrix.map(r=>r.reverse())[0].map((c, i) => matrix.map(r => r[i]));