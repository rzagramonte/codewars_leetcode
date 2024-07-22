/*
JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.

However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.

See some examples:

var arrayToSearch = [[1,2],[3,4],[5,6]];
var query = [1,2]; // => 0
query = [5,6]; // => 2
query = [9,2]; // => -1
You will be required to validate the inputs on the following criteria:

each element of the array to be searched should be an array;
each sub-array in the two-dimensional array should be of length two; and
query should be an array of length two.
If the inputs are not valid you should throw an Error.

See some examples:

var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
arrayToSearch = [1,2,3,4,5,6]; // => throw Error
arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
var query = [1,2]; // => valid input
query = 5; // => throw Error
query = [9,2,1]; // => throw Error

Will the arguments be of any data type?
Should the argument be two arrays?
Should the query array always be a length of 2?
Will the return always be a number or a thrown error?

var bigArray = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
var searchFor = [9,20];
console.log(searchArray(bigArray,searchFor), 2);
searchFor = [1,12];
console.log(searchArray(bigArray,searchFor), -1);
searchFor = [7,2];
console.log(searchArray(bigArray, searchFor), 1);

TODO:
throw error if:
array to search is not not an array
query is not an array
length of query is not 2
every element in array to search is not an array
at least one element in array to search has a length other than 2
convert each element by join with a space
return index of query joined to a string in array to search

*/

const searchArray = (a, q) => {
    if(!Array.isArray(a)) throw Error();
    if(!Array.isArray(q)) throw Error();
    if(q.length != 2) throw Error();
    if(a.every(e=>!Array.isArray(e))) throw Error();
    if(a.some(e=>e.length !=2)) throw Error();
    a = a.map((e)=>e.join(' '));
    return a.indexOf(q.join(' '));
  };