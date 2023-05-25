/*
Surface Area and Volume of a Box

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

Will the parameters always be three numbers?
Will the numbers always be counting whole or floating-point numbers?
Will the return always be an array?
Will the elements of the returned array always be numbers?
Will the length of the returned array always be 2?

console.log(getSize(4, 2, 6), [88, 48]);
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6), [88,48]);
*/


//declare a constant variable and assign it to ana arrow function
//set three parameters
//create a new array using square bracket notation
//first element of the array should be the formula for total surface area of a box
//second element of the array should be the formula for the volume of a box
const getSize = (width, height, depth) => [2*width*depth+2*depth*height+2*height*width,width * height * depth];