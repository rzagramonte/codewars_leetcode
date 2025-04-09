/*
Sort with a sorting array

Sort an array according to the indices in another array.
It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    
sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

Will the arguments passed into the function always be two arrays?
Will the return always be an array?

console.log(sort(['x', 'y', 'z'], [1, 2, 0]), ["z", "x", "y"]);
console.log(sort(['x', 'y', 'z'], [0, 1, 2]), ['x', 'y', 'z']);
console.log(sort([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]), [1, 2, 3, 4, 5]);
console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]), [1, 3, 2, 5, 4]);

TODO:
map over the initial array
for each iteration, return element at the index of i in the sorting array
*/

const sort = (initArr, sortArr) => initArr.map((e, i) => initArr[sortArr.indexOf(i)]);
