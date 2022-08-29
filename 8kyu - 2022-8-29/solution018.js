/*
Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

P.R.E.P
parameters: a string
return: a string reversed
examples:
'world'  =>  'dlrow'
'word'   =>  'drow'
pseudocode:
split the string into substrings
reverse the order of the strings
join the reversed order of substrings into one string
*/
function solution(str){
    return str.split('').reverse().join('');
  }