/*
Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

P.R.E.P.
parameters:
return:
examples:
pseudocode:
declare function
set parameter
use replace method to replace ! with nothing
return the new string
*/
function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
  }