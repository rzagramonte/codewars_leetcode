/*
Find array

You are given two arrays arr1 and arr2, where arr2 always contains integers.

Write a function such that:

For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] the function returns ['a', 'a']

For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] the function returns [1, 1, 1]

For arr1 = [0, 3, 4], arr2 = [2, 6] the function returns [4]

For arr1=["a","b","c","d"] , arr2=[2,2,2], the function returns ["c","c","c"]

For arr1=["a","b","c","d"], arr2=[3,0,2] the function returns ["d","a","c"]

Note that when an element inside arr2 is greater than the index of the last element of arr1 no element of arr1 should be added to the resulting array. If either arr1 or arr2 is empty, you should return an empty arr (empty list in python, empty vector in c++). Note for c++ use std::vector arr1, arr2.

Will the parameters always be 2 arrays?
Will the elements of the first input array be of any data types?
Will the elements of the second input array be of only positive whole numbers?
Will the return be an array?
Will the elements of the returned array be derived from the first input array?
Will the indices used to pull the elements from the first input array into the returned array be derived from the second input array?

console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]), ['a', 'a']);
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]), [1, 1, 1]);
console.log(findArray([1, 2, 3, 4, 5], [0]), [1]);
console.log(findArray([1, 2, 3, 4, 5], [4,2,0]), [5,3,1]);
console.log(findArray([1, 2, 3, 4, 5], [2,2,2]), [3,3,3]);
console.log(findArray(['this', 'is', 'test'], [0, 1, 2]), ['this', 'is', 'test']);
console.log(findArray([1,2,3], []), []);
console.log(findArray([], [2,1,3]), []);
console.log(findArray([], []), []);
console.log(findArray([2,3], [5,0,1]), []);
*/

//declare a constant variable which will be assigned to an arrow function
//set parameters
//is either true: the negation of length of arr1 OR the negation of length of arr2? then return empty array
//else is at least one element in arr2 greater the last index of arr1 ? then return an empty array
//else return a new array where we iterate over arr2
//parameter is the element which will server as an index for the new array that also points to the index of arr1
//return the element in arr1 based on the index or number in arr2
const findArray = (arr1, arr2) => !arr1.length || !arr2.length ? [] : arr2.some(i => i > arr1.length-1) ? [] : arr2.map(i => arr1[i]);