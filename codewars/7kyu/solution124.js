/*
lucky number

###Lucky number

Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.

Function will return true for lucky numbers and false for others.

Will the parameter always be a number?
Will the return always be a boolean of true or false?

console.log(isLucky(1892376), true);
console.log(isLucky(189237), false);
console.log(isLucky(1098), true);
console.log(isLucky(22869), true);
console.log(isLucky(0), true);
*/

//declare constant variable isLucky which will be assigned to an arrow function
//set parameter n
//return true or false for the following:
//do all the digits added return a falsy value (0)? - negated
//OR
//does the sum of all the digits divided by 9 produce a falsy remainder value (0)? - negated
const isLucky = n => !([...n.toString()].reduce((a,c)=>a+c,0)) || !([...n.toString()].reduce((a,c)=>a+c,0) % 9);