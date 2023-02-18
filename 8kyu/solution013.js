/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

Will the parameter always be an array?
Will the elements in the array always be numbers?
Will the return always be a number?

console.log(positiveSum([1,2,3,4,5]),1);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);
*/

//declare variable and assign to arrow function
//filter elements that satisfy callback function of being equal to or greater than 0
//add the remaining elements to one number
const positiveSum = arr => arr.filter(e=>e>=0).reduce((a,c)=>a+c,0);