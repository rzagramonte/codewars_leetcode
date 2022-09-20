/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
P. - parameters: two parameters, employed and vacation
R. - return: boolean of true or false
E. - examples/edge cases:
setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
P. - pseudocode:
create function expression or declare function
pass in two arguments
create if else statement
return boolean of true or false
*/

function setAlarm(employed, vacation){
    if(employed && vacation){
        return false;
    }else if(!employed && vacation){
        return false;
    }else if (!employed && !vacation){
        return false;
    }else if (employed && !vacation){
        return true;
    };
}