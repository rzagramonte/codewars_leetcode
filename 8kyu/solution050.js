/*
Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

Will the paramerters always be three numbers?
Will the return always be one number?

console.log(past(0,1,1),61000);
console.log(past(1,1,1),3661000);
console.log(past(0,0,0),0);
console.log(past(1,0,1),3601000);
console.log(past(1,0,0),3600000);
*/

//declare variable and assign to arrow function
//set parameter
//add s time 1000 + m times 60000 + h times 3600000
const past = (h, m, s) => (s * 1000) + (m * 60000) + (h * 3600000);
