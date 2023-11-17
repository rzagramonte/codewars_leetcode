/*
Is n divisible by (...)?

Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7
This kata is following kata: http://www.codewars.com/kata/is-n-divisible-by-x-and-y

Will the parameter(s) always be numbers?
Will the return always be a boolean of true or false?

console.log(isDivisible(3,3,4),false);
console.log(isDivisible(12,3,4),true);
console.log(isDivisible(8,3,4,2,5),false);
*/

//declare constant variable isDivisible which will be assigned to an arrow function
//set parameter n using rest operator
//spread n into a new array
//return true if every element in the array is divisible by the first, else return false
const isDivisible = (...n) => [...n].every(e=>!(n[0]%e));