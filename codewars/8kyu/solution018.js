/*
Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

Will the parameter always be a string?
Will the return always be a string?

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');
*/

//declare variable and assign to to arrow function
//split string by character into an array of sub-strings
//reverse the array in place
//join the array by character into a string
const solution = str => str.split('').reverse().join('');