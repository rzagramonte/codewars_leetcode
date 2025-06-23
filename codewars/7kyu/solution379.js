/*
Hit Count

Task
As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.

Rules
The function will take one argument which will be a four character string representing hit count
The function must return a multi-dimensional array containing four inner arrays
The final value in each inner array must be the actual value to be displayed
Values returned in the array must be of the type number
Examples

counterEffect("1250") // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]] 
counterEffect("0050") // [[0],[0],[0,1,2,3,4,5],[0]] 
counterEffect("0000") // [[0],[0],[0],[0]]

Will the argument passed into the function always be a string?
Will the return always be an array of arrays of numbers?

console.log(counterEffect("1250"), [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]);
console.log(counterEffect("0050"), [[0],[0],[0,1,2,3,4,5],[0]]);
console.log(counterEffect("0000"), [[0],[0],[0],[0]]);

TODO:
spread string into an array
map over array
create an array for each substring
length should be string as a num + 1
for each element in the inner array, return i
*/

const counterEffect = (hitCount) => [...hitCount].map((e) => Array.from({ length: +e + 1 }, (n, i) => i));
