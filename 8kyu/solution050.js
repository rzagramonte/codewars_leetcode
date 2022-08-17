/*
Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

P.R.E.P.
parameters: three numbers, h for hour, m for minutes, s for seconds
return: a number representing the number of miliseconds after midnight
examples:
h = 0
m = 1
s = 1
result = 61000
pseudocode:
declare function
set parameters
declare variable result and assign it to 0
create three if statements with conditions of the constraints
add and reassign result with the hours, minutes, and seconds in milliseconds
return the result
*/

function past(h, m, s){
    //#Happy Coding! ^_^
    let result = 0;
    if(h >= 0 && h <= 23){
        result += (h * 3600000);
    };
    if(m >= 0 && m <= 59){
        result += (m * 60000);
    };
    if(s >= 0 && s <= 59){
        result += (s * 1000);
    };
    return result;
}
