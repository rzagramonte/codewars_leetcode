/*
Name Shuffler
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

P.R.E.P.
parameter: a string
return: a string reversed
example:
(Input --> Output)

"john McClane" --> "McClane john"
pseudocode:
declare function
set parameter
return str appended to split() with its argument as '
' appended to reverse() appended to join() with its argument as ' '
*/
function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse().join(' ');
  }