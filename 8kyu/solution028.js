/*
Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string.
P.R.E.P.
parameters: a string
return: a string with no spaces
examples:
input => output
"hello i am a string" => "helloiamastring"
pseudocode:
declare function
set parameter x for the string
use the split method and join method to return the modified string
*/

function noSpace(x){
    return x.split(' ').join('');
  }