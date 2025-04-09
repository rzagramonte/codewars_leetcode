/*
Get the mean of an array

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

Will the parameter always be an array?
Will the elements in the input array always be numbers?
Will the return always be a numbers?
*/

//declare const variable and assign to arrow function
//set parameter
//reduce the array to one number and divide by the number of elements in the array
//return the number rounded down to its nearest integer
const getAverage = marks => Math.floor(marks.reduce((a,c)=>a+c,0)/marks.length);