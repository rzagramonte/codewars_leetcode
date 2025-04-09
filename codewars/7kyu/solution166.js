/*
Is every value in the array an array?

Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false

Will the parameter always be an array?
Can the elements of the input array be of any data type?
Will the return always be a boolean of either true or false?

console.log(arrCheck([]), true);
console.log(arrCheck([['string']]), true);
console.log(arrCheck([[],{}]), false);
console.log(arrCheck([[1],[2],[3]]), true);
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);
*/

//return true if every value in the array is an array, else return false
const arrCheck = value => value.every(v=>Array.isArray(v))