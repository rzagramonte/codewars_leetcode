/*
Failed Filter - Bug Fixing #3
Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.

Will the parameter always be a string?
Will the return always be a string?
console.log(FilterNumbers("test123"), 'test');
console.log(FilterNumbers("a1b2c3"), 'abc');
console.log(FilterNumbers("aa1bb2cc3dd"), 'aabbccdd');
*/

//declare constant variable FilterNumbers which will be assigned to an arrow function
//set parameter str
//spread str into an array
//filter the following into a new array: if true for character is not a number when coerced to a number
//join the array into a string
const FilterNumbers = str => [...str].filter(c => isNaN(c)).join('');