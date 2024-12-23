/*
Acrostic reader

An acrostic is a text in which the first letter of each line spells out a word. It is also a quick and cheap way of writing a poem for somebody, as exemplified below:

Courageous
Yielding
Nifty
Tantalizing
Helpful
Insightful
Amazing

Write a program that reads an acrostic to identify the "hidden" word. Specifically, your program will receive a list of words (representing an acrostic) and will need to return a string corresponding to the word that is spelled out by taking the first letter of each word in the acrostic.

Will the argument passed into function always be an array of strings?
Will the return always be a string?

console.log(readOut(['Jolly', 'Amazing', 'Courteous', 'Keen']), 'JACK')
console.log(readOut(['Marvelous', 'Excellent', 'Gifted']), 'MEG')

TODO:
iterate over array
transform each string to the first character
join the elements to a string
*/

const readOut = acrostic =>  acrostic.map(e=> e[0]).join('');