/*
Strong Number (Special Numbers Series #2)

Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".

Examples
1 is a strong number, because 1! = 1, so return "STRONG!!!!".
123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".

Will the argument passed into the function always be a number?
Will the return always a string?


console.log(strong(1), "STRONG!!!!");
console.log(strong(2), "STRONG!!!!");
console.log(strong(145), "STRONG!!!!");
console.log(strong(7), "Not Strong !!");
console.log(strong(93), "Not Strong !!");
console.log(strong(185), "Not Strong !!");

spread the number as a string into an array
iterate over the array and create nested arrays for each element
each element in the nested arrays should be the index + 1
reduce the inner arrays and return the product
reduce the outer array and return a sum
is the sum equal to n ? return the correct string
*/

const strong = n => [...n.toString()].map(e=>Array.from({length:+e}, (_,i)=>i+1)).map(e=>e.reduce((a,c)=>a*c,1)).reduce((a,c)=>a+c,0) == n ? "STRONG!!!!" : "Not Strong !!";