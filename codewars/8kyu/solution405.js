/*
Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal. The first mission: let all elements in the array keep two decimal places(No need to convert number n). The second mission: Traversal arr, count the number of elements which are smaller than n and return it.

Will the arguments passed into the function always be an array of floating point numbers and a floating point number?
Will the return always be a number?

console.log(howManySmaller([1.234,1.235,1.228],1.24) should return 2)
console.log(howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1)
console.log(howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2)

filter numbers that are less than n and return the length of the array
*/

const howManySmaller = (arr,n) => arr.filter(e=>+e.toFixed(2)<n).length;
