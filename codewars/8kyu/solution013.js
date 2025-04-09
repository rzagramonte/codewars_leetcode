/*
Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

Will the parameter always be an array?
Will the elements in the input array always be numbers?
Will the return always be one number?

console.log(positiveSum([1,2,3,4,5]),1);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);
*/

//declare constant variable and assign to arrow function
//set parameter
//reduce the elements in the array to one number
//is the current value greater than 0 ? then return it, else return 0
const positiveSum = arr => arr.reduce((a,c)=>a+(c>0?c:0),0);