/*
Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

Will the parameter always be a string?
Will the input string always have either numbers or spaces as characters?
Will the format of the input string be a number followed by a space and this repeated an unknown number of times?
Will there be no space at the front or end of the input string?
Will the return be a string?
Will the returned string be of two numbers separated by a space in between them?

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
console.log(highAndLow("1 2 3"), "3 1");
*/

//declare a constant variable which will be assigned to an arrow function
//set parameter
//return a string
//interpolate the max and min numbers into the string
const highAndLow = numbers => `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;