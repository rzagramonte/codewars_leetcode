/*
Quarter of the year
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
P.R.E.P.
parameters: a number
return: a number
examples:
1 => 1
6 => 2
4 => 1
pseudocode:
declare function
set parameter
create if else statement to return the correct number
*/

const quarterOf = (month) => {
    // Your code here
    return month < 4 ? 1 : month > 3 && month < 7 ? 2 : month > 6 && month < 10 ? 3 : 4;
  }
