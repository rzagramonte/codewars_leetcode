/*
Be Concise III - Sum Squares

Be Concise III - Sum Squares
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
sumSquares([7,3,9,6,5]) === 200
sumSquares([11,13,15,18,2]) === 843
Shorten the code such that it meets the requirements.

A few hints:

Try researching about built-in Array methods; they may help shorten your code a lot
Good luck!


Will the parameter always be an array?
Will the elements of the input array always be number?
Will the return always be a number?

console.log(sumSquares([1,2,3,4,5]), 55);
console.log(sumSquares([7,3,9,6,5]), 200);
console.log(sumSquares([11,13,15,18,2]), 843);
console.log(sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5]), 110);
*/

//declare constant variable sumSquares which will be assigned to an arrow function
//set parameter
//reduce numbers by adding the square of each number
const sumSquares = array => array.reduce((a,c)=>a+(c**2),0);