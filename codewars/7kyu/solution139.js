/*
filterEvenLengthWords

Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);

console.log(output); // --> ['word', 'word']

Will the parameter always be an array?
Will the elements of the input array always be strings?
Will the return always be an array?
Will the elements in the returned array always be strings?

console.log(filterEvenLengthWords(['Hello', 'World']), []);
console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four']), ['Four']);
*/

//declare constant variable filterEvenLengthWords which will be assigned to an arrow function
//set parameter words
//is the negation of the length of each word modulus 2 truthy or falsy?
const filterEvenLengthWords = words => words.filter(w=>!(w.length%2));