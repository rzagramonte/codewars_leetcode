/*
Kata Example Twist

This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times.

Will the parameter always be an empty array?
Will the return be an array with the value "codewars" 1000 times?
*/

//declare variable websites and assign to empty array
var websites = [];
//declare variable string and assign to 'codewars '
let string = 'codewars ';
//declare variable newArr and assign to string repeating value 1000 times and splitting it into an array of substrings
let newArr = string.repeat(1000).split(' ');
//pop off the last element
newArr.pop();
//reassign websites to newArr
websites = newArr;