/*
validate code with simple regex

Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

console.log(validateCode(123), true);
console.log(validateCode(248), true);
console.log(validateCode(8), false);
console.log(validateCode(321), true);
console.log(validateCode(9453), false);

TODO:
test regex against input as a string
*/

const validateCode = code => /^[1-3]/.test(`${code}`);