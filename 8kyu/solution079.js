/*
Twice as old
DESCRIPTION:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

P.R.E.P.
parameters: two numbers
return: one number
examples:
input => output
(36,7) => 22
(55,30) => 5
(42,21) => 0
(22,1) => 20
(29,0) => 29
pseudocode:
declare function
set parameters
create if else statement
if dadYearsOld is greater than sonYears times two then return dadYears - (sonYearsOld times two)
else return (sonYearsOld times two) - dadYearsOld
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    if (dadYearsOld > (sonYearsOld * 2)){
        return dadYearsOld - (sonYearsOld * 2);
      }else{
        return (sonYearsOld * 2) - dadYearsOld;
      }; 
  }