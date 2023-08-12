/*
Filter the number

Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

Will the parameter always be a string?
Will the return always be a number?

console.log(filterString("123"), 123);
console.log(filterString("a1b2c3"), 123);
console.log(filterString("aa1bb2cc3dd"), 123);
*/

//declare variable which will be assigned to an arrow function
//set parameter
//split the string by character and place each character into an array
//create a new array, mapping over the original array and converting each element to a number (if possible)
//filter the elements that return truthy if they are a number
//join the array's elements back to a string
//convert the string to a number
var filterString = value => +value.split('').map(char=>+char).filter(char=>!Number.isNaN(char)).join('');