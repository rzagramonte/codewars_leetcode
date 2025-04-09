/*
Thinkful - Logic Drills: Umbrella decider

Write a function take_umbrella() that takes two arguments: a string representing the current weather and a float representing the chance of rain today.

Your function should return True or False based on the following criteria.

You should take an umbrella if it's currently raining or if it's cloudy and the chance of rain is over 0.20.
You shouldn't take an umbrella if it's sunny unless it's more likely to rain than not.
The options for the current weather are sunny, cloudy, and rainy.

For example, take_umbrella('sunny', 0.40) should return False.

As an additional challenge, consider solving this kata using only logical operaters and not using any if statements.

Will the parameters always be a string and a number?
Will the return always be a boolean of true or false?

console.log(takeUmbrella('sunny', 0.4), false);
console.log(takeUmbrella('rainy', 0), true);
console.log(takeUmbrella('cloudy', 0.2), false);
*/


//declare constant variable which will be assigned to an arrow function
//set parameters
//return true if any of the following are true:
//weather is equal to "rainy"
//weather is equal to "cloudy" and chance is greater than 0.20
//chance is greater than or equal to 0.50
//else return false
const takeUmbrella = (weather, chance) => weather == "rainy" || (weather == "cloudy" && chance > 0.20) || chance >= 0.50;