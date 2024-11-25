/*
For the sake of argument

Write a function named numbers.

function should return True if all parameters are of the Number type.

The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true

Will the arguments passed into the function always be of any data type?
Will the return always be a boolean of true or false?

console.log(numbers(1, 12, 3, 100), true);
console.log(numbers("1", "2", "3", "4"), false);
console.log(numbers(1), true);
console.log(numbers(1, "2", [3, 4], "a"), false);
console.log(numbers(1, NaN, 3), true);
console.log(numbers(null), false);

condense input values into one parameter
return true or false if every value is a number or not

*/

const numbers = (...values) => [...values].every(v=> typeof v == 'number');