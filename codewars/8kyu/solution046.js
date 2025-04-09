/*
Keep Hydrated!
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

Will the parameter always be a number?
Will the return always be a number?

console.log(litres(2), 1);
console.log(litres(1.4), 0);
console.log(litres(12.3), 6);
console.log(litres(0.82), 0);
console.log(litres(11.8), 5);
console.log(litres(1787), 893);
console.log(litres(0), 0);
*/

//declare variable and assign to arrow function
//set parameter
//return time times 1/5 and round down the answer
const litres = time => Math.floor(time * .5);