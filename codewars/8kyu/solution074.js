/*
Third Angle of a Triangle
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle

Will the parameter always be two numbers?
Will the numbers always be positive numbers only?
Will the return always be two numbers?

console.log(otherAngle(30, 60), 90);
console.log(otherAngle(60, 60), 60);
console.log(otherAngle(43, 78), 59);
console.log(otherAngle(10, 20), 150);
*/

//declare const variable and assign to arrow function
//set parameters
//subtract the sum of a + b from 180
const otherAngle = (a, b) => 180 - (a + b);