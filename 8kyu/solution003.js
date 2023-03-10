/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Will the parameter always be a number?
Will the number always be a whole number?
Will the return be an array?
Will the elements in the array always be numbers?

console.log(powersOfTwo(0), [1]);
console.log(powersOfTwo(1), [1, 2]);
console.log(powersOfTwo(4), [1, 2, 4, 8, 16]);
*/

//declare const variable and assign it to an arrow function
//set parameter
const powersOfTwo = n => {
  //declare variable named results and assign it to an empty array
    let results = [];
    //create for loop
    for (let i = 0; i <= n; i++) {
      //push 2 to the i-th power into results
      results.push(Math.pow(2, i));
    }
    //return results
    return results;
  };