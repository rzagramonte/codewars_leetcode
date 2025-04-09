/*
Broken Collatz

The Collatz sequence is a set of numbers formed by taking an arbitrary positive integer and applying an operation to it: if the number is even, divide it by two, and if it's odd, multiply by three and add one. Repeat this process, taking the result as the input for the next step, until the resulting number is one.

The following function is not working. It's purpose is to return the length of any Collatz sequence. Can you fix it?

Will the input always be a number?
Will the return always be a number?

console.log(collatz(2), 2);
console.log(collatz(4), 3);
console.log(collatz(6), 9);
*/

//declare constant variable collatz which will be assigned to an arrow function
//set parameters n and count as a default parameter set to 1
//if n is equal in value to 1, return count
//else call the function again with appropriate n with 1 added to the count
const collatz = (n, count=1) => n==1 ? count : collatz(n = !(n%2) ? n/2 : n*3+1, count+1);