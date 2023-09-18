/*
Tax Calculator

Write a function to calculate compound tax using the following table:
For $10 and under, the tax rate should be 10%.
For $20 and under, the tax rate on the first $10 is %10, and the tax on the rest is 7%.
For $30 and under, the tax rate on the first $10 is still %10, the rate for the next $10 is still 7%, and everything else is 5%.
Tack on an additional 3% for the portion of the total above $30.
Return 0 for invalid input(anything that's not a positive real number).
Examples:
An input of 10, should return 1 (1 is 10% of 10)
An input of 21, should return 1.75 (10% of 10 + 7% of 10 + 5% of 1)
* Note that the returned value should be rounded to the nearest penny.

Will the parameter always be either a number or any other data type?
Will the return always be a number 0 or greater?

console.log(taxCalculator(15), 1.35);
console.log(taxCalculator(25), 1.95);
console.log(taxCalculator(35), 2.35);
*/


//declare constant variable taxCalculator which will be assigned to an arrow function
//set parameter total
//if total is is less than or equal to 0 or total returns truthy for is NaN when attempted to be converted to a number, return 0
//declare variables and assign to values for total ranging from 0 to infinity
//return correct value based on total input
const taxCalculator = total => {
    // Return the amount of tax for the supplied total
    if(total <= 0 || isNaN(total)) return 0;
    let tenAndUnder = +(total * .10).toFixed(2);
    let twentyAndUnder = +(10 * .10 + (total-10) * .07).toFixed(2);
    let thirtyAndUnder = +(10 * .10 + 10 * .07 + (total-20) * .05).toFixed(2);
    let thirtyAndUp = +(10 * .10 + 10 * .07 + 10 * .05 + (total-30) * .03).toFixed(2);
    return total <= 10 ? tenAndUnder : total <= 20 ? twentyAndUnder : total <=30 ? thirtyAndUnder : thirtyAndUp;
  };