/*
String reverse slicing 101

You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

Examples
'123'   ==>  ['321', '21', '1']
'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']

Will the parameter always be a string?
Will the return always be an array?
Will the elements of the output array always be strings?
Will the length of the output array be equal to the length of the input string?

console.log(reverseSlice('123'), ['321', '21', '1']);
console.log(reverseSlice('abcde'), ['edcba', 'dcba', 'cba', 'ba', 'a']);

*/

//declare constant variable reverseSlice and set parameter str
//reassign str to str reversed
//create a new array
//iterate over str reversed
//push str sliced starting from the index of the current iteration
//return the array
const reverseSlice = str => {
    str = str.split('').reverse().join('');
    let arr = [];
    for(let i =0; i<str.length; i++){
      arr.push(str.slice(i));
    };
    return arr;
  };