/*
Every nth array element. (Basic)

Create a method (JS: function) every which returns every nth element of an array.

Usage
With no arguments, array.every it returns every element of the array.
With one argument, array.every(interval) it returns every intervalth element.
With two arguments, array.every(interval, start_index) it returns every intervalth element starting at index start_index

Note: due to fact JS translation ask for a function instead of an Array method the above uses will be :

javascript:                          ruby:
every(array)                         array.every
every(array, interval)               array.every(interval)
every(array, interval, start_index)  array.every(interval, start_index)
Examples
every([0,1,2,3,4])     // [0,1,2,3,4]
every([0,1,2,3,4],1)   // [0,1,2,3,4]
every([0,1,2,3,4],2)   // [0,2,4]
every([0,1,2,3,4],3)   // [0,3]
every([0,1,2,3,4],3,1) // [1,4]
Notes
Test cases:

interval will always be a positive integer (but may be larger than the size of the array).
start_index will always be within the bounds of the array.

Once you have completed this kata, try the advanced version (http://www.codewars.com/kata/every-nth-array-element-advanced) which allows negative intervals and unbounded start_indexes

Translator notes
Ruby is the original language for this kata.

Will the parameter be always at least an array of numbers?
Will the two optional parameters be two numbers?
Will the return always be an array of numbers?

console.log(every([0,1,2,3,4]), [0,1,2,3,4]);
console.log(every([0,1,2,3,4],1), [0,1,2,3,4]);
console.log(every([0,1,2,3,4],2), [0,2,4]);
console.log(every([0,1,2,3,4],3), [0,3]);
console.log(every([0,1,2,3,4],3,1), [1,4]);
*/

//declare function and set parameters
//if interval and start are truthy when negated, return arr
//if interval is truthy and start negated is truthy, return new arr1 using interval to update the final expression under the for loop
//else return new arr2 using start to initialize i and interval to update the final expression under the for loop
const every = (arr, interval, start) => {
    if(!interval && !start) return arr;
    if(interval && !start){
      let arr1 = [];
      for(let i = 0; i<arr.length; i+=interval){
        arr1.push(arr[i]);
      };
      return arr1;
    }else{
      let arr2 = [];
      for(let i = start; i<arr.length; i+=interval){
        arr2.push(arr[i]);
      };
      return arr2;
    };
  };