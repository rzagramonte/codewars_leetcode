/*
Holiday VIII - Duty Free
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.

Will the parameters always be numbers?
Will the return always be a number?

console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24, 35, 3000), 357);
*/

//declare const variable and assign it to an arrow function
//set three parameters
//divide hol by normPrice times discount divided by 100
//use Math.floor() to round down
//can omit curly braces and return keyword since it's an implicit return
const dutyFree = (normPrice, discount, hol) => Math.floor(hol/(normPrice * (discount/100)));