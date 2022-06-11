/*
Thinkful - Logic Drills: Traffic light
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

Will the parameter always be a string?
Will the string be either "green", "yellow", or "red"?
Will the return always be a string?
Will the returned string be either "yellow", "red", or "green"?

console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");
*/


//declare const variable and assign to arrow function
//set parameters
//if current equals in value to 'green' then return 'yellow'
//if current equals in value to 'yellow' then return 'red'
//else return 'green'
const updateLight = current => current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';