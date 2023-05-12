/*
Count Odd Numbers below n

Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!

Will the parameter always be a number?
Will the return always be a number?

console.log(oddCount(15), 7);
console.log(oddCount(15023), 7511);
*/

//declare const variable and assign to arrow function
//set parameter
//subtract 1 from n then divide by 2 and round up
const oddCount = n => Math.ceil((n-1)/2);