/*
Beginner Series #1 School Paperwork
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n = 5, m = 5: 25
n = -5, m = 5:  0
Waiting for translations and Feedback! Thanks!

Will the parameter always be two numbers?
Will the return always be one number?

console.log(paperwork(5,5), 25);
console.log(paperwork(5,-5), 0);
console.log(paperwork(-5,-5), 0);
console.log(paperwork(-5,5), 0);
console.log(paperwork(5,0), 0);
*/

//declare variable and assign to arrow function
//set parameters
//if n is greater and 0 and m is greater than 0, then return n time m, else return 0
const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0;