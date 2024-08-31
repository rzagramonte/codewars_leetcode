/*
ORing arrays

It started as a discussion with a friend, who didn't fully grasp some way of setting defaults, but I thought the idea was cool enough for a beginner kata: binary OR each matching element of two given arrays (or lists, if you do it in Python; vectors in c++) of integers and give the resulting ORed array [starts to sound like a tonguetwister, doesn't it?].

If one array is shorter than the other, use the optional third parameter (defaulted to 0) to OR the unmatched elements.

For example:

orArrays([1,2,3],[1,2,3]) === [1,2,3]
orArrays([1,2,3],[4,5,6]) === [5,7,7]
orArrays([1,2,3],[1,2]) === [1,2,3]
orArrays([1,2],[1,2,3]) === [1,2,3]
orArrays([1,2,3],[1,2,3],3) === [1,2,3]

Will the argument passed into the function always be two arrays of numbers and an optional number?
Will the return always be an array of numbers?

console.log(orArrays([1,2,3], [1,2,3]), [1,2,3]));
console.log(orArrays([1,2,3], [4,5,6]), [5,7,7]));
console.log(orArrays([1,2,3], [1,2]), [1,2,3]));
console.log(orArrays([1,2], [1,2,3]), [1,2,3]));
console.log(orArrays([1,2,3], [1,2,3], 3), [1,2,3]));

TODO:
if the length of a1 is greater than or equal to the length of a2, return a1 then iterate over a1 returning the OR bitwise of e | n if element at a2 of the current index is undefined else element of a2 at current index
else return a1 concatenated with an array with the difference of length of a2 and a1 and iterated over to return n then proceed to return the OR bitwise
*/

const orArrays = (a1, a2, n=0) => (a1.length >= a2.length ? a1 : a1.concat(Array.from({length:a2.length-a1.length},e => n))).map((e,i)=> e | (a2[i] == undefined ? n : a2[i]));