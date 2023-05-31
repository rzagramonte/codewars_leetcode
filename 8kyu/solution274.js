/*
Multiply the number

Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹

Will the parameter always be a number?
Will the return always be a number?

console.log(multiply(10),250);
console.log(multiply(5),25);
console.log(multiply(200),25000);
console.log(multiply(0),0);
console.log(multiply(-2),-10);
*/

//declare a constant variable which will be assigned to an arrow function
//set parameter
//multiply number by 5 to the power of the number of digits that number has
const multiply = number => number * Math.pow(5,Math.abs(number).toString().length);