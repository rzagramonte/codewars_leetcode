/*
Simple Comparison?

Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

Will the paramters always be either a string or a number?
Will the returns always be a boolean of true or false?

console.log(add('1', 1), true);
console.log(add(1, '1'), true);
console.log(add(1, '0'), false);
console.log(add('11', 11), true);
console.log(add(12, 12), true);
console.log(add(120, '021'), false);
*/

//declare function and set parameters
function add(a, b){
	// code here
    //use return keyword
    //
  return a == b ? true : false;
}

//refactored code:
/*
Can the parameter be either string or number?
Will the return always be a boolean of either true or false?

console.log(add('1', 1), true);
console.log(add(1, '1'), true);
console.log(add(1, '0'), false);
console.log(add('11', 11), true);
console.log(add(12, 12), true);
console.log(add(120, '021'), false);
*/

//is a equal in value to b?
const add = (a, b) => a == b;