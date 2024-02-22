/*
pick a set of first elements

Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];

Will there always be two parameters?
Will the parameter arr always be an array?
Will the default for parameter n always be the number 1?
Will n always be a positive integer?

Will the return always be an array?

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

function first(arr, n = 1) {//set n default value to 1
    //create if else statement using ternary operator
    //if n == 0  return an empty array
    //else append the slice method to arr and pass in 0 as the first argument and n as the second argument
    return n == 0 ? [] : arr.slice(0,n);
  }

//refactored code:

/*
Will the parameter always be an array and a number?
Will the elements of the input array be of any data type?

const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first([...arr]   ), ['a']);
console.log(first([...arr], 2), ['a', 'b']);

*/

//is n truthy? then return sub array starting at the start of the array and ending at 1 else return an empty array
const first = (arr, n = 1) => n ? arr.slice(0,n): [];