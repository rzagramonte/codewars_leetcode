/*
Define a method/function that removes from a given array of integers all the values contained in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
Enjoy it!!

Will the arguments passed into the function/method always be arrays?
Will the arrays always have integers if there are any elements?

let l = new Array();
console.log(l.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]), [2, 2, 4]);
console.log(l.remove_([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2]), [5, 6, 7, 8]);
console.log(l.remove_([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3]), [8, 7, 6, 5, 1]);
console.log(l.remove_([4, 4, 2, 3], [2, 2, 4, 3]), []);
console.log(l.remove_([], [2, 2, 4, 3]), []);

TODO:
filter integer list of all integers except ones included in the values list
*/

Array.prototype.remove_ = (integer_list, values_list) => integer_list.filter(e=>!values_list.includes(e));