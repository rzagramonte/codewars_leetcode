/*
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

P.R.E.P.
parameters: an array of words
return: a string
examples: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
pseudocode:
declare function
set parameter
return array with appended join method
*/

const smash = words => words.join(" ");