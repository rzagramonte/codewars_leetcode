/*
Get key/value pairs as arrays

Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

Will the argument passed into the function always be an object?
Will the return always be an array of two arrays of strings and numbers, respectively?


console.log(keysAndValues({a: 1, b: 2, c: 3}), [['a', 'b', 'c'], [1, 2, 3]]);
console.log(keysAndValues({}), [[], []]);
console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'}), [['1', '2', '3'], ['a', 'b', 'c']]);

TODO:
return keys of object
return values of object
return values in an array
*/

const keysAndValues = data => [Object.keys(data), Object.values(data)];