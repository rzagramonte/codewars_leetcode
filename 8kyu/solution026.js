/*
Beginner Series #1 School Paperwork
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n = 5, m = 5: 25
n = -5, m = 5:  0
Waiting for translations and Feedback! Thanks!

P.R.E.P.
parameters: n for the number of classmates and m for the number of pages of the paperwork
return:
If n < 0 or m < 0 return 0.
examples:
n = 5, m = 5: 25
n = 3, m = 20: 60
n = -5, m = 5:  0
pseudocode:
declare a function
set parameters n and m
return an evaluation using ternary operator
if n and m > 0 return n * m
else return 0
*/

function paperwork(n, m){
    return((n > 0 && m > 0) ? (n * m) : 0);
};