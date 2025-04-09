/*
Reducing Problems - Bug Fixing #8

Oh no! Timmy's reduce is causing problems, Timmy's goal is to calculate the two teams scores and return the winner but timmy has gotten confused and sometimes teams don't enter their scores, total the scores out of 3! Help timmy fix his program!

Return true if team 1 wins or false if team 2 wins!

Will the parameters always be two arrays?
Will the elements in the input arrays always be numbers?
Will the return always be a boolean of true or false?

console.log(calculateTotal([1,2,2],[1,0,0]), true);
console.log(calculateTotal([6,45,1],[1,55,0]), false);
console.log(calculateTotal([57,2,1],[]), true);
console.log(calculateTotal([],[3,4,3]), false);
*/

//declare a constant variable which will be assigned to an arrow function
//set parameters
//reduce team1 to one value
//greater than
//reduce team2 to one value
const calculateTotal = (team1, team2) => team1.reduce((t, c) => t+c,0) > team2.reduce((t, c) => t+c,0);