/*
Convert Hash To An Array

Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Good Luck!

Will the argument passed into the function's parameter always be an object?
Will the return always be an array of arrays of key and value?

console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}), [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
console.log(convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]));
*/

//push key and value in an array into an array and return outer array
const convertHashToArray = hash => {
    const arr = [];
    for(let key in hash){
      arr.push([key,hash[key]]);
    }
    return arr;
  };