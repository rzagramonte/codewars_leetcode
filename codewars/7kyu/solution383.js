/*
Area of an arrow

An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

arrow

a and b are integers and > 0

Write a function which returns the area of the arrow.

Will the arguments passed into the funciton always be two numbers?
Will the return always be a number?

console.log(arrowArea(4,2), 2);
console.log(arrowArea(7,6), 10.5);
console.log(arrowArea(25,25), 156.25);

TODO:
multiply a and b
divide by 4
*/

const arrowArea = (a, b) => (a * b) / 4;
