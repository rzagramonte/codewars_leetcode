/*
Two numbers are positive

Task:
Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false

Will the parameters always be three numbers?
Will the return always be a boolean of true or false?

console.log(twoArePositive(2, 4, -3), true,);
console.log(twoArePositive(-4, 6, 8));
console.log(twoArePositive(4, -6, 9));
console.log(twoArePositive(4, 6, 0));
console.log(twoArePositive(-4, 6, 0));
console.log(twoArePositive(4, 6, 10));
console.log(twoArePositive(-14, -3, -4));
*/

//declare a constant variable which will be assigned to an arrow function
//set parameters
//if a is greater than 0 and b is greater than 0 and c is less than or equal to 0, return true
//OR if a is less than or equal to 0 and b is greater than 0 and c is greater than 0, return true
//OR if a is greater than 0 and b is less than or equal to 0 and c is greater than 0, return true
//else return false
const twoArePositive = (a, b, c) => (a > 0 && b > 0 && c <= 0) || (a <= 0 && b > 0 && c > 0) || (a > 0 && b <= 0 && c > 0);