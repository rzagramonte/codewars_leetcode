/*
Larger Product or Sum

Description
For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

If the sum of the n largest numbers is higher, return "sum"
If the product of the n smallest numbers is higher, return "product"
If the 2 values are equal, return "same"

Note The array will never be empty and n will always be smaller than the length of the array.

Example
sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) // => "product"
Explanation
The sum of the 3 highest numbers is 41 + 36 + 20 = 97

The product of the lowest 3 numbers is 8 x 9 x 10 = 720

The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns "product"

Will the arguments passed into the function's parameters always be an array of numbers and a number?
Will the return always be a string?

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), "sum");
console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3), "product");
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3), "same");

TODO:
sort the array
add the last n numbers
multiply the first n numbers
return product if it's larger
sum if it's larger
same if product and sum are equal
*/

const sumOrProduct = (array, n) => {
    array = array.sort((a,b)=>a-b);
    const sum = array.slice(-n).reduce((a,c)=>a+c,0);
    const product = array.slice(0,n).reduce((a,c)=>a*c,1);
    return product > sum ? 'product' : product < sum ? 'sum' : 'same';
  };