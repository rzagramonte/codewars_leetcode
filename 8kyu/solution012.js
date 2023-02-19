/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Will the parameter always be a number?
Will the return always be a string?
Will the string be either "Even" or "Odd"?

console.log(even_or_odd(2), "Even");
console.log(even_or_odd(-42), "Even");
console.log(even_or_odd(-7), "Odd");
console.log(even_or_odd(0), "Even");
console.log(even_or_odd(7), "Odd");
*/

//declare variable and assign it to arrow function
//if number % 2 is truthy, return "Odd" else return "Even"
const even_or_odd = number => number % 2 ? "Odd" : "Even";