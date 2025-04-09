/*
By 3, or not by 3? That is the question . . .

A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
Try to avoid using the % (modulo) operator.

Will the argument passed into the function always be a string?
Will the return always be a boolean of true or false?

console.log(divisibleByThree('123'), true);
console.log(divisibleByThree('19254'), true);
console.log(divisibleByThree('88'), false);
console.log(divisibleByThree('1'), false);

spread str into array
reduce to sum
divide by 3
is number an integer?
*/

const divisibleByThree = str => Number.isInteger([...str].reduce((a,c)=>a + +c,0) / 3);