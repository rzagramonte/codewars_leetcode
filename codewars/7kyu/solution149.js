/*
Arithmetic progression

In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

Will the parameter always be three numbers?
Will the return always be a string?

console.log(arithmeticSequenceElements(1, 2, 5), "1, 3, 5, 7, 9");
console.log(arithmeticSequenceElements(1, 0, 5), "1, 1, 1, 1, 1");
console.log(arithmeticSequenceElements(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26");
console.log(arithmeticSequenceElements(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10");
*/

//declare constant variable arithmeticSequenceElements which will be assigned to an arrow function
//set parameters a, d, n
//declare variable results to hold empty string
//create for loop  to iterate from 1 to n (inclusive)
//add the nth term of the sequence to results
//return results
const arithmeticSequenceElements = (a, d, n) => {
    let results = '';
    for(let i = 1; i<=n; i++){
      results += `${a + (i-1)*d}, `
    };
    return results.slice(0,-2);
  };