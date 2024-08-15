/*
Check three and two

Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"

Will the argument passed into the function always be an array of strings?
Will the return always be a boolean of true or false?

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]), true);
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]), false);
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]), false );

TODO:
create empty object
iterate over array
for each iteration, is the value set as a key in the object? then up its count, else add it and set it to 1
take the values and join them to form a string
return true or false if the resulting string is either "32" or "23"
*/

const checkThreeAndTwo = a => {
    const c = {};
    a.forEach(e => c[e] ? c[e] += 1 : c[e] = 1);
    const r = Object.values(c).join('');
    return  r == "32" || r == "23";
  };