/*
String Scramble

Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

Ex:

scramble('abcd', [0,3,1,2]) -> 'acdb'

The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corresponding numbers in the index array.

In other words, put the first character in the string at the index described by the first element of the array

You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).

Will the parameter always be a string and an array?
Will the elements of the input array always be numbers?
Will the return always be a string?

console.log(scramble('abcd', [0,3,1,2]);
console.log(scramble('sc301s', [4,0,3,1,5,2]);
console.log(scramble('bskl5', [2,1,4,3,0]);
*/

//create for loop
//for each iteration, assign the element of arr to the element in str
//join r and return
function scramble(str, arr) {
    for(var r=[],i=0;i<arr.length;i++) r[arr[i]]=str[i]
    return r.join("")
  };