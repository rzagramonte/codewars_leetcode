/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

Will the parameter be a number?
Will the return be a number?

console.log(summation(1), 1);
console.log(summation(8), 36);
*/

//declare variable and assign to an arrow function
//set parameter
var summation = num => {
    //declare variable and assign to 0
    let result = 0;
    //create for loop
    for (let i = 1; i <= num; i++ ){
        result += i;
    }
    return result;
  };