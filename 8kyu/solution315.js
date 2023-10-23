/*
Formatting decimal places #0

Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34

Will the parameter always be a number?
Will the return always be a number?

console.log(twoDecimalPlaces(4.659725356), 4.66);
console.log(twoDecimalPlaces(173735326.3783732637948948);
console.log(twoDecimalPlaces(4.653725356), 4.65);
*/

//declare constant variable twoDecimalPlaces which will be assigned to an arrow function
//return a number rounded to the nearest tenth
const twoDecimalPlaces = n => Number(n.toFixed(2));