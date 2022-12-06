/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

Will the parameters always be two numbers?
Will the return always be true or false?

console.log(lovefunc(1,4), true);
console.log(lovefunc(2,2), false);
console.log(lovefunc(0,1), true);
console.log(lovefunc(0,0), false);
*/

//declare const variable and assign to arrow function
//set parameters
//return true or false the result of flower1 % 2 is not the result of flower2 % 2
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;