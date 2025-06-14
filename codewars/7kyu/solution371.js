/*
The reject() function

Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

Will the arguments passed into the functions always be an array and a function?
Will the return always be an array?

console.log(reject(['a', 'b', 3, 'd'], x => typeof x === 'number'), ['a', 'b', 'd']);
console.log(reject(['a', 'b', 3, 'd'], x => typeof x === 'string'), [3]);
console.log(reject([1, 2, 3, 4, 5, 6], x => x % 2 === 0), [1, 3, 5]);

TODO:
filter OUT elements the satisfy the callback function
*/

const reject = (array, predicate) => array.filter((n) => !predicate(n));