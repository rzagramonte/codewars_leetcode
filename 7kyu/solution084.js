/*
Reversed Message

Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

Will the parameter always be a string?
Will the return always be a string?

console.log(reverseMessage('AaaaA'),'Aaaaa');
console.log(reverseMessage('Hello there'),'Ereht Olleh');
console.log(reverseMessage('Pl34k78j'), 'J87k43lp');
console.log(reverseMessage('Reverse this message!'),'!egassem Siht Esrever');
console.log(reverseMessage('Today is the 14th of January!'),'!yraunaj Fo Ht41 Eht Si Yadot');
console.log(reverseMessage('hty56hA T76#Td'),'Dt#67t Ah65yth');
console.log(reverseMessage(''),'');
*/

//declare constant variable reverseMessage which will be assigned to an arrow function
//set parameter
//convert all letters to lowercase
//split the string by words
//reverse the words in the array
//create new array where each word itself is reversed (reversed letters)
//convert the first letter of each word to uppercase
//join the substrings in the array into a string of the current state of words
const reverseMessage = str => str.toLowerCase().split(' ').reverse().map(word=>[...word].reverse().join('')).map(word=>word.slice(0,1).toUpperCase() + word.slice(1)).join(' ');