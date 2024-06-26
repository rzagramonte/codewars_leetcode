/*
Are arrow functions odd?

Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []

Will the parameter always be an array?
Will the return always be an array?

console.log(odds([]), []);
console.log(odds([2, 4, 6]), []);
console.log(odds([1, 3, 5]), [1, 3, 5]);
console.log(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5]);
*/

//declare const variable and assign to an arrow function
//append values to the filter method
//callback function should test if each element is not even
//const odds = values => values.filter( element => element % 2 !== 0);

//refactored code:
/*
Will the parameter always be an array?
Will the elements of the input array always be numbers, if any?
Will the return always be an array?
Will the elements of the output array always be numbers, if any?

console.log(odds([]), []);
console.log(odds([2, 4, 6]), []);
console.log(odds([1, 3, 5]), [1, 3, 5]);
console.log(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5]);
*/

//declare const variable and assign to an arrow function
//append values to the filter method
//callback function should test if each element is not even
const odds = values => values.filter(n => n%2);