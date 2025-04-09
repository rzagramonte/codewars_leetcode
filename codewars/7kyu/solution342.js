/*
How many times should I go?

Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimited access to the museum.

In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.

Will the arguments passed into the function always be two numbers?
Will the return always be a number?

console.log(howManyTimes(40,15), 3)
console.log(howManyTimes(30,10), 3)
console.log(howManyTimes(80,15), 6)

TODO:
divide annual by individual
round up to nearest integer
*/

const howManyTimes = (annualPrice, individualPrice) => Math.ceil(annualPrice / individualPrice);