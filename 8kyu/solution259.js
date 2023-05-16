/*
Points of Reflection

"Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

Task
Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

This kata was inspired by the Hackerrank challenge Find Point

Will the parameters always be two arrays?
Will the elements in the input arrays always be numbers?
Will the numbers always be integers or floating point number?
Will the return always be an array?
Will the elements in the output array always be numbers?
Will the numbers always be integers or floating point number?

console.log(symmetricPoint([0,0], [1,1]), [2, 2]);
console.log(symmetricPoint([2, 6], [-2, -6]), [-6, -18]);
console.log(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);
console.log(symmetricPoint([1, -35], [-12, 1]), [-25, 37]);
console.log(symmetricPoint([1000, 15], [-7, -214]), [-1014, -443]);
console.log(symmetricPoint([0, 0], [0, 0]), [0, 0]);
*/

//declare const variable and assign to arrow function
//set parameters
//P1[0] = q[0]+(q[0]-p[0])
//P1[1] = q[1]+(q[1]-p[1])
const symmetricPoint = (p, q) => [q[0]+(q[0]-p[0]),q[1]+(q[1]-p[1])];