/*
Divide and Conquer

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

Will the parameter always be an array?
Will the elements in the input array be a combination of strings and numbers?
Will the return always be a number?

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);
*/

//declare constant variable divCon which will be assigned to an arrow function
//set parameter x
//filter numbers and reduce
//filter strings and reduce
//subtract the sums
const divCon = x =>x.filter(n=>Number.isInteger(n)).reduce((a,c)=>a+c,0) - x.filter(n=>!Number.isInteger(n)).reduce((a,c)=>a+(+c),0);