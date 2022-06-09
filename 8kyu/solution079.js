/*
Twice as old
DESCRIPTION:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

Will the parameters always be two numbers?
Will the numbers always be positive numbers?
Will the return always be a number?
Will the returned number always be greater than or equal to 0?

console.log(twiceAsOld(55,30) , 5);
console.log(twiceAsOld(42,21) , 0);
console.log(twiceAsOld(22,1) , 20);
console.log(twiceAsOld(29,0) , 29);
console.log(twiceAsOld(36,7) , 22);
*/

//declare const variable and assign to arrow function
//set parameters
//is dadYearsOld greater than songYearsOld * 2 ? then return dadYearsOld - sonYearsOld * 2
//else return songYearsOld * 2 - dadYearsOld
const twiceAsOld = (dadYearsOld, sonYearsOld) => dadYearsOld > (sonYearsOld * 2) ? dadYearsOld - (sonYearsOld * 2) : (sonYearsOld * 2) - dadYearsOld;