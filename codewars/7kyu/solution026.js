/*
No ifs no buts

Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"
There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? :.

In fact the word if and the character ? are not allowed in your code.

Will the parameter always be two numbers?
Will the return always be a string?

console.log(noIfsNoButs(45, 51), "45 is smaller than 51");
console.log(noIfsNoButs(1, 2), "1 is smaller than 2");
console.log(noIfsNoButs(-3, 2), "-3 is smaller than 2");
console.log(noIfsNoButs(1, 1), "1 is equal to 1");
console.log(noIfsNoButs(100, 100), "100 is equal to 100");
console.log(noIfsNoButs(100, 80), "100 is greater than 80");
console.log(noIfsNoButs(20, 19), "20 is greater than 19");
*/

//declare constant variable which will be assigned to an arrow function
//set parameters
//will return string if both are true
//will return whichever expression combination of a and be is true
const noIfsNoButs = (a, b) => (a < b && `${a} is smaller than ${b}`) || (a > b && `${a} is greater than ${b}`) || (a === b && `${a} is equal to ${b}`);