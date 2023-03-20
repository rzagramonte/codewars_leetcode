/*
NBA full 48 minutes average

An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams!

Will the parameters always be two numbers?
Will these numbers for the parameters be either a whole number or floating point number?
Will the return always be a number?
Will the number for the return always be either a whole number or a floating point number rounded to the nearest tenth?

console.log(pointsPer48(12, 20), 28.8);
console.log(pointsPer48(10, 10), 48.0);
console.log(pointsPer48(5, 17), 14.1);
console.log(pointsPer48(0, 0), 0);
console.log(pointsPer48(30.8, 34.7), 42.6);
console.log(pointsPer48(22.9, 33.8), 32.5);
*/

//declare a const variable and assign it to an arrow function
//set parameters
//if ppg and mpg are both truthy return ppg times 48 then divided by mpg; return as a number and to the nearest tenth
//else return 0
//use Number() and .toFixed(1)
const pointsPer48 = (ppg, mpg) => ppg && mpg ? Number(((ppg * 48)/mpg).toFixed(1)) : 0;