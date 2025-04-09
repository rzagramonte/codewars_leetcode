/*
Sort an array by value and index

Sort an array by value and index
Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5

Will the parameter always be an array of numbers?
Will the return always be an array of numbers?

console.log(sortByValueAndIndex([ 1, 2, 3, 4, 5 ]), [ 1, 2, 3, 4, 5 ]);
console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ]), [ 2, 3, 4, 23, 5 ]);
console.log(sortByValueAndIndex([ 26, 2, 3, 4, 5 ]), [ 2, 3, 4, 5, 26 ]);
console.log(sortByValueAndIndex([ 9, 5, 1, 4, 3 ]), [ 1, 9, 5, 3, 4 ]);
*/

//declare function and set parameter
//iterate over array creating each element to an array of the element as its first element, then the element time index +1
//sort that array by the second element in ascending order
//iterate over that array resulting just the first element
function sortByValueAndIndex(array)
{
return array.map((a,i) => [ a, a * (i+1)]).sort((a,b) => a[1]-b[1]).map(a => a[0]);
}