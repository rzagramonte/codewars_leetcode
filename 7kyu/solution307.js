/*
Cut array into smaller parts

Write a function that takes two arguments:

An array: The array to be split into smaller parts.
Chunk size: A positive integer, which is the size of each chunk.
This function should split the given array into parts with the given chunk size, and return the result as a nested array.

If the array cannot be evenly divided by the size, the last part may contain fewer elements.

If an array of size 123 is given and the chunk size is 10, the function will split the array into 13 smaller parts:

The first 12 parts will each have a size of 10.
The final part will contain the remaining 3 elements.
Examples:
Array: [1, 2, 3]
Chunk size: 1
Expected solution --> [[1], [2], [3]]

Array: [1, 2, 3, 4, 5] 
Chunk size: 2
Expected solution --> [[1, 2], [3, 4], [5]]

Will the arguments passed into the function always be an array of integers and a number?
Will the return always be an array of arrays of integers?

console.log(makeParts([1,2,3,4,5], 2), [[1,2],[3,4],[5]])
console.log(makeParts([1,2,3], 1), [[1],[2],[3]])
console.log(makeParts([1,2,3,4,5], 10), [[1,2,3,4,5]])

TODO:
join the array to a string?
cut the string by the chunk size
wrap each string into an array and spread the characters back into integers
wrap all the arrays into one
*/

const makeParts = (arr, chunkSize) => arr.reduce((chunks, _, i) => {
    if (!(i % chunkSize)) chunks.push(arr.slice(i, i + chunkSize));
    return chunks;
  }, []);