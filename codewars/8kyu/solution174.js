/*
Find Multiples of a Number

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

Will the parameters always positive integers where the limit is always higher than the base?
Will the return always be an array of numbers?

console.log(findMultiples(5, 25), [5, 10, 15, 20, 25]);
console.log(findMultiples(1, 2), [1, 2]);
console.log(findMultiples(5, 7), [5]);
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
console.log(findMultiples(11, 54), [11, 22, 33, 44]);
*/

function findMultiples(integer, limit) {
    //your code here
    let result = [];
    for(let i = 0; i < Math.floor(limit/integer); i++){
      result.push(integer * (i+1));
    }
    return result;
  }

//refactored code:
//return new array where the length is limit divided by integer rounded down
//for each slot, multiply integer times index plus 1
const findMultiples = (integer, limit) => Array.from({length:Math.floor(limit/integer)},(n,i)=>integer * (i+1));