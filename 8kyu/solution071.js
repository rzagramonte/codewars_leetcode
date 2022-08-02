/*
Thinkful - Logic Drills: Traffic light
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

P.R.E.P.
parameters: a string
return: a string
example:
input => output
green => yellow
yellow => red
red => green
pseudocode:
declare function
set parameter
create if else statement using switch case
return specific string based on different conditions
*/

function updateLight(current) {
    //your code here!
  switch(current){
    case 'green':
        return 'yellow';
        break;
    case 'yellow':
        return 'red';
        break;
    default:
        return 'green';
        break;
  };
  }