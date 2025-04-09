/*
Return the day
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"

P.R.E.P.
parameters: a number
return: a string
examples:
input => output
1 => 'Sunday'
5 => 'Thursday'
3 => 'Tuesday'
pseudocode:
declare function
set parameter
create if else statement using switch case
*/

function whatday(num) { 

    // put your code here
    switch (num){
        case 1: 
            return 'Sunday';
            break;
        case 2:
            return 'Monday';
            break;
        case 3:
            return 'Tuesday';
            break;
        case 4:
            return 'Wednesday';
            break;
        case 5:
            return 'Thursday';
            break;
        case 6:
            return 'Friday';
            break;
        case 7:
            return 'Saturday';
            break;
        default:
            return 'Wrong, please enter a number between 1 and 7';
            break;
    }
  }

//refactored code:

/*
Will the parameter always be a number?
Will the return always be a string?

console.log(whatday(1),'Sunday');
console.log(whatday(5),'Thursday');
console.log(whatday(3),'Tuesday');
*/

// use switch-case statement
const whatday = (num) => {
    switch (num){
        case 1: return 'Sunday';
        case 2: return 'Monday';
        case 3: return 'Tuesday';
        case 4: return 'Wednesday';
        case 5: return 'Thursday';
        case 6: return 'Friday';
        case 7: return 'Saturday';
        default: return 'Wrong, please enter a number between 1 and 7';
    };  
};