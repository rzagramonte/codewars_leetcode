/*
Switch it Up!
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

P.R.E.P.
parameters: a number 0-9
return: a string representing the input number in words
examples:
input => output
(1) => "One"
(3) => "Three"
(5) => "Five"
pseudocode:
declare function
set parameter
create switch statement to return specific string depending on different cases
switch variable => number
cases => 0-9
code to run if case match => return string then break
no need for default clause
*/

function switchItUp(number){
    //Write your own Code!
    switch(number){
        case 0:
            return 'Zero';
            break;
        case 1:
            return 'One';
            break;
        case 2:
            return 'Two';
            break;
        case 3:
            return 'Three';
            break;
        case 4:
            return 'Four';
            break;
        case 5:
            return 'Five';
            break;
        case 6:
            return 'Six';
            break;
        case 7:
            return 'Seven';
            break;
        case 8:
            return 'Eight';
            break;
        case 9:
            return 'Nine';
            break;
    };
    }

//refactored code:
const switchItUp = number => {
    switch(number){
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
      };
  };