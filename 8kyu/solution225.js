/*
How much water do I need?

My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

The answer should be rounded to the nearest 2 decimal places.

Will the parameters always be three numbers?
Will the numbers always be greater than 0?
Will the return always be a number?
Will the number, if not a whole number, be rounded to the nearest 2 decimals?

console.log(howMuchWater(10,10,21), 'Too much clothes');
console.log(howMuchWater(10,10,2), 'Not enough clothes');
console.log(howMuchWater(10,11,20), 23.58);
console.log(howMuchWater(50,15,29), 189.87);
*/


//declare const variable and assign to arrow function
//set parameters
//if clothes is greater than 2 * load, return 'Too much clothes'
//else if clothes < load, return 'Not enough clothes'
//else if clothes > load, return water * 1.1 ^ (clothes - load) to the nearest 2 decimals
//else return water;
const howMuchWater = (water, load, clothes) => clothes > 2 * load ? 'Too much clothes' : clothes < load ? 'Not enough clothes' : clothes > load ? +(water * 1.1 ** (clothes - load)).toFixed(2) : water;