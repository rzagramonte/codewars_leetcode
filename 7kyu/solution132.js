/*
Driving School Series #1


Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


Example:

[10,10,10,18,20,20] --> 12

Will the parameter always be an array?
Will the elements of the input array always be numbers?
Will the return always be either a number or a string?

console.log(passed([10,10,10,18,20,20]),12);
console.log(passed([21,22,24]),'No pass scores registered.');
console.log(passed([3,22,9,13,20,18,2,14,20,8,23,12,7,21,21,19,20,11,18,7,13,22,11,20,9]), 10);
console.log(passed([19,16,8,11,25,10,29,22,23]),11);
*/

//declare constant variable passed
//set parameter list
//declare variable to hold array of filtered numbers that are less than or equal to 18
//declare variable that will hold the number of elements of the filtered array
//return either the average of the filtered numbers or the string
const passed = list => { 
    let filteredList = list.filter(n=>n<=18);
    let numPassed = filteredList.length;
    return Math.round(filteredList.reduce((a,c)=>a+c,0)/numPassed) || 'No pass scores registered.';
  };