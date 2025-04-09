/*
Is n divisible by x and y?

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5


Will the parameter always be three numbers?
Will the input numbers always be positive, non-zero numbers?
Will the return always be a boolean of true or false?

console.log(isDivisible(3,3,4),false);
console.log(isDivisible(12,3,4),true);
console.log(isDivisible(8,3,4),false);
console.log(isDivisible(48,3,4),true);
*/

//declare variable and assign to arrow function
//set parameters
//does n modulus x equal in value to 0 and does n modulus y equal in value to 0 ?
//const isDivisible = (n, x, y) => n % x == 0 && n % y == 0;

//refactored code:

const isDivisible = (n, x, y) => !(n % x) && !(n % y);