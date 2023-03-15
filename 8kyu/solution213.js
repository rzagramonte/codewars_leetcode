/*
Is your period late?

In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

Will the parameters always be two date objects and a number?
Will the return always be true or false?

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35), false);
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28),true);
*/

//declare constant variable and assign it to an arrow function
//set parameters
//subtract last from today and divide by the number of milliseconds in one day
//is this greater than cycleLength? return true else return false
const periodIsLate = (last, today, cycleLength) => (today-last)/86400000  > cycleLength;