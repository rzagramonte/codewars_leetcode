/*
Sum of differences in array

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

Will the parameter always be an array of at least one number, at most an array of only numbers, or an empty array?
Will the return always be one number?

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
console.log(sumOfDifferences([-3]), 0);
console.log(sumOfDifferences([]), 0);
*/

//declare const variable and assign to arrow function
//set parameter
const sumOfDifferences = arr =>{
    //using dot notation, append arr to the sort method to sort in descending order
    arr.sort((a,b) => b - a);
    //declare variable and set to 0
    let sum = 0;
    //create for loop
    for (let i = 0; i < arr.length - 1; ++i) {
        //add and reassign sum to difference of current element and following element
      sum += arr[i] - arr[i + 1];
    };
    //return sum
    return sum;
  };