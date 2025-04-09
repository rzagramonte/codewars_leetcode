/*
Number of Decimal Digits

Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.

Will the paramter always be a number?
Will the return always be a number?

console.log(digits(5), 1);
console.log(digits(12345), 5);
console.log(digits(9876543210), 10);
*/

//declare constant variable digits which will be assigned to an arrow function
//set parameter n
//turn n into a string and return length of that string
const digits = n => n.toString().length;