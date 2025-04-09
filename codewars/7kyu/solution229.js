/*
Help the Fruit Guy

Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.

Will the argument passed into the function's parameters always be an array of strings?
Can there be a string within the array with "Rotten"?
Will the return always be an array of strings?
Will any of the returned strings have "Rotten"?

console.log(removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"]);
console.log(removeRotten([]), []);

TODO:
remove rotten from any strings
if no strings return the array
if falsy value return empty array
*/

const removeRotten = bagOfFruits => !bagOfFruits || !bagOfFruits.length ? [] : bagOfFruits.map((e,i,a)=>e.toLowerCase().replace(/rotten/g,''));