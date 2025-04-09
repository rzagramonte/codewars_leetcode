/*
[JS] Parse integers in array

A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.

Examples:

parseNumbers(['10']) // should return [10]
parseNumbers(['-1','0','1']) // should return [-1,0,1]

Will the parameter be an array?
Will the elements of the input array be strings?
Will the return be an array?
Will the elements of the returned array be numbers?
Can there be empty arrays as input and output?

console.log(parseNumbers([]), []);
console.log(parseNumbers(['13']), [13]);
console.log(parseNumbers(['2.48']), [2]);
*/

/*
 * Function converts array of string to array of integers.
 * @param  {Array} of numbers in form of string
 * @return {Array} of integer numbers 
 */

//declare constant variable which will be assigned to an arrow function
//set parameter
//map over input array parsing the string elements to an integer
const parseNumbers = intStrs => intStrs.map(e=>parseInt(e));