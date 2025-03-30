/*
The average length

Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1

Will the argument passed into the function always be an array of strings?
Will the return always be an array of strings?

console.log(['u', 'y'], ['u', 'y'], "It should work for ['u', 'y']");
console.log(['aa', 'bbb', 'cccc'], ['aaa', 'bbb', 'ccc'], "It should work for ['aa', 'bbb', 'cccc']");
console.log(['aa', 'bb', 'ddd', 'eee'], ['aaa', 'bbb', 'ddd', 'eee'], "It should work for ['aa', 'bb', 'ddd', 'eee']");

TODO:
get average length
iterate over array
make all strings the size of average length
*/

const averageLength = array => {
    const length = Math.round(array.reduce((a,c)=>a+c.length,0)/array.length);
    array.forEach((e,i)=> array[i] = e.length > length ? e.slice(0,length) : e.padEnd(length,e));
  return array
};