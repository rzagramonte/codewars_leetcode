/*
Failed Sort - Bug Fixing #4

Failed Sort - Bug Fixing #4
Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order

Will the parameter always be a string?
Will the return always be a string?

console.log(sortArray('12345'), '12345');
console.log(sortArray('54321'), '12345');
console.log(sortArray('34251'), '12345');
*/

//declare const variable which will be assigned to an arrow function
//set parameter
//split string by character
//sort array by default
//join the array to a string with no pattern passed in
const sortArray = value => value.split('').sort().join('');