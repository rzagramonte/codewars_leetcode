/*
Odds-Index

You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

Will the parameter always be an array?
Will the elements of the array be either strings or numbers?
Will there always be a string "odd" in the input array?
Will the return always be a boolean of true or false?

console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"]), true);
console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"]), false);
console.log(oddBall(["even",10,"odd",2,"even"]), true);
*/


//declare constant variable oddball which will be assigned to an arrow function
//set parameter arr
//is there at least one number that is the index of "odd"?
const oddBall = arr => arr.some(e=>e==arr.indexOf("odd"));