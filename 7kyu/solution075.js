/*
Thinkful - List and Loop Drills: Lists of lists

You have a two-dimensional list in the following format:

data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

For input, you can trust that neither the main list nor the sublists will be empty.

Will the parameter always be an array of arrays?
Will the elements in the nested input array be numbers?
Will the return always be a number?

console.log(processData([[2, 5], [3, 4], [8, 7]]), 3);
console.log(processData([[2, 9], [2, 4], [7, 5]]), 28);
*/

//declare constant variable which will be assigned to an arrow function
//set parameter
//map over array obtaining the difference of numbers in each nested array
//reduce the differences by obtaining the product of the numbers in the new array
const processData = data => data.map(arr=>arr[0]-arr[1]).reduce((a,c)=>a*c,1);