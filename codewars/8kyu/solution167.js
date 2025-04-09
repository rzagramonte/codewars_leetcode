/*
Fix your code before the garden dies!

You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!

Will the parameter always be a number?
Will the return always be a string?

console.log(rainAmount(100), "Your plant has had more than enough water for today!");
console.log(rainAmount(39), "You need to give your plant 1mm of water");
*/

//declare function and set parameter
//use ternary/conditional operator
//if mm is greater than or equal to 40, then return "Your plant has had more than enough water for today!"
//else return `You need to give your plant ${40-mm}mm of water`
let rainAmount = mm => mm >= 40 ? "Your plant has had more than enough water for today!" : `You need to give your plant ${40-mm}mm of water`;
