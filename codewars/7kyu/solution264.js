/*
Maximum Product

Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

Will the argument passed into the function always be an array of integers?
Will the return always be a number?


console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);

TODO:
create array of products
filter in integers
return max number in array
*/

const adjacentElementsProduct = a => Math.max(...Array.from({length:a.length},(_,i)=> a[i] * a[i+1]).filter(e=>Number.isInteger(e)));