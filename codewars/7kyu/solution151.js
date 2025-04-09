/*
Find Duplicates

Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []

Will the parameter always be an array?
Will the return always be an array?

console.log(duplicates([1, 2, 3, 4, 5]), []);
console.log(duplicates([]), []);
console.log(duplicates(['no', 'duplicates', 'here']), []);
console.log(duplicates([1, 2, 3, 4, 3]), [3]);
console.log(duplicates([1, 2, 3, 3, 2, 1]), [3, 2, 1]);
console.log(duplicates([1, 2, 1, 2, 1, 2, 1]), [1, 2]);
console.log(duplicates([1, 2, 3, 4, '3']), []);
console.log(duplicates(['1', 2, 3, 3, '2', 1]), [3]);
console.log(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut']);
*/

//declare constant variable duplicates which will be assigned to an arrow function
//set parameter arr
//create new array
//spread set values
//filter elements that run true for index of e doesn't equal current index
const duplicates = arr => [...new Set(arr.filter((e, i) => arr.indexOf(e) !== i))];