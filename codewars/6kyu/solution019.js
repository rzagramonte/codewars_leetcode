/*
Count Repeats

Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1

Will the argument passed into the function always be a string?
Will the return always be a number?

console.log(countRepeats('AABCCD'),2);
console.log(countRepeats('AABCCDA'),2)
console.log(countRepeats('AaBBCCC'),3);

TODO:
remove consecutive duplicates
return difference in length of input string and length of string w/o consecutive duplicates
*/

const countRepeats = str => str.length - [...str].map((e,i,a) => a[i-1] == e ? '' : e).join('').length;