/*
Quadrants

Task
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4

There are four quadrants:

First quadrant, the quadrant in the top-right, contains all points with positive X and Y
Second quadrant, the quadrant in the top-left, contains all points with positive X, but negative Y
Third quadrant, the quadrant in the bottom-left, contains all points with negative X, but positive Y
Fourth quadrant, the quadrant in the bottom-right, contains all points with negative X and Y

Will the parameter always be two numbers?
Will the numbers always be either greater than or less than 0?
Will the return always be a number?
Will the number always be either 1, 2, 3, or 4?

console.log(quadrant(1, 2), 1);
console.log(quadrant(3, 5), 1);
console.log(quadrant(-10, 100), 2);
console.log(quadrant(-1, -9), 3);
console.log(quadrant(19, -56), 4);
*/

//declare const variable and assign to arrow function
//set parameters
//if x is greater than 0 and y is greater than 0, return 1
//else if x is less than 0 and y is greater than 0, return 2
//else if x is less than 0 and y is less than 0, return 3
//else return 4
const quadrant = (x, y) => x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4;