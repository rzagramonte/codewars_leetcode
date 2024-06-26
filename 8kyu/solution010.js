/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true

Will the parameters always be two booleans?
Will the return always be one boolean?

console.log(setAlarm(true, true),  false);
console.log(setAlarm(false,true),  false);
console.log(setAlarm(true, false), true);
*/

//declare variable and assign to arrow function
//set parameters
//return true or false if employed is truthy and the negation of vacation is truthy
const setAlarm = (employed, vacation) => employed && !vacation;