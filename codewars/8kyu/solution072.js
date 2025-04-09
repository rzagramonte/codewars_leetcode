/*
Quarter of the year
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Will the parameter always be a number?
Will the return always be a number?

console.log(quarterOf(3), 1);
console.log(quarterOf(8), 3);
console.log(quarterOf(11), 4);
*/

//declare const variable and assign to arrow function
//set parameter
//is month less than 4? then return 1
//is month greater than 3 and less than 7? then return 2
//is month greater than 6 and less than 10? then return 3
//else return 4
const quarterOf = month => month < 4 ? 1 : month > 3 && month < 7 ? 2 : month > 6 && month < 10 ? 3 : 4;
