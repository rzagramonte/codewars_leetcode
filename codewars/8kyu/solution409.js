/*
Methods of String object--slice(), substring() and substr()

Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

Will the argument always be an array of strings?
Will the return always be an array of strings?

console.log(cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]);
console.log(cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]);
console.log(cutIt(["codewars","javascript","java"]) should return ["code","java","java"]);

find smallest length of str in arr
iterate over arr
slice each str from 0 to the min length
*/

const cutIt = arr => arr.map(e=>e.slice(0,Math.min(...arr.map(e=>e.length))));