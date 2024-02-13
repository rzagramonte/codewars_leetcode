/*
Training JS #8: Conditional statement--switch

Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

P.R.E.P.
parameter(s): a number
return: a number
examples:
input => output
(1) => 31
(2) => 28
(3) => 31
(4) => 30
(12) => 31
pseudocode:
declare function
set parameter
create switch case statement
add in all cases
add in all breaks
add in all returns
*/

function howManydays(month){
    switch (month){
        case 1:
          return 31;
          break;
        case 2:
          return 28;
          break;
        case 3:
          return 31;
          break;
        case 4:
          return 30;
          break;
        case 5:
          return 31;
          break;
        case 6:
          return 30;
          break;
        case 7:
          return 31;
          break;
        case 8:
          return 31;
          break;
        case 9:
          return 30;
          break;
        case 10:
          return 31;
          break;
        case 11:
          return 30;
          break;
        case 12:
          return 31;
          break;
    }
  }

//refactored code:
const howManydays = month => {
  switch (month){
    case 1: return 31;
    case 2: return 28;
    case 3: return 31;
    case 4: return 30;
    case 5: return 31;
    case 6: return 30;
    case 7: return 31;
    case 8: return 31;
    case 9: return 30;
    case 10: return 31;
    case 11: return 30;
    case 12: return 31;
  }};