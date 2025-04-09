
/*
Slice the middle of a list backwards

Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

Will the argument passed into the function's parameter always be an array of at least 4 numbers?
Will the return always be an array of the middle 2 or 3 numbers in reverse order?

console.log(reverseMiddle([1, 2, 3, 4]), [3, 2]);
console.log(reverseMiddle([1, 2, 3, 4, 5]), [4, 3, 2]);
console.log(reverseMiddle([1, 2, 3, 4, 5, 6]), [4, 3]);
console.log(reverseMiddle([1, 2, 3, 4, 5, 6, 7]), [5, 4, 3]);
*/

//if length of array is odd, return middle 3 reversed, else return middle two reversed
const reverseMiddle = a => {
    const h = Math.floor(a.length/2);
    return a.length % 2 ? [a[h + 1], a[h], a[h - 1]] : [a[h], a[h - 1]];
};