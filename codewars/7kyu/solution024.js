/*
String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Will the parameters always be two strings?
Will the return always be a boolean?
Will the returned boolean always be either true or false?

console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);
*/

//declare const variable and assign to arrow function
//set parameters
//check if str ends with ending and return true or false
const solution = (str, ending) => str.endsWith(ending);