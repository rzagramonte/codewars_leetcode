/*
Count of positives / sum of negatives
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Will the parameter always be an array, null, or an empty array?
If the array has elements, will the elements of the input array be all numbers?
Will the numbers be a mix of positive and negative numbers?
Will the return always be an array?
Will the first element of the returned array always be a positive number?
Will the first element of the returned array represent the length of an array containing all the positive numbers of the input array?
Will the second element of the returned array always be a negative number?
Will the second element of the returned array always be a reduced value of an array containing all the negative numbers of the input array?

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),[10, -65]);
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]),[8, -50]);
*/

//declare variable and assign to arrow function
//set parameter i for input
//return empty array if negation of input is truthy OR if the negation of the length of input is truthy 
//else return an array with the following:
//first element in array: the length of the filtered input; callback function returns true if any element is greater than 0
//second element in array: a reduced value of the filtered input; callback function returns true if any element is less than 0
const countPositivesSumNegatives = a => !a || !a.length ? [] : [a.filter(e => e > 0).length, a.reduce((acc,c) => acc + (c<0?c:0), 0)];