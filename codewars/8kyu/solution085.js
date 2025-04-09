/*
Name Shuffler
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

old:

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

function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse().join(' ');
  }

new:

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(nameShuffler('john McClane'),'McClane john');
console.log(nameShuffler('Mary jeggins'),'jeggins Mary')
console.log(nameShuffler('tom jerry'),'jerry tom');

split string into words
reverse
join array to string of words
*/

const nameShuffler = str => str.split(' ').reverse().join(' ');
