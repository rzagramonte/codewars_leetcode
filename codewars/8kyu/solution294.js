/*
Did she say hallo?

You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests

Will the parameter always be a string?
Will the return always be a boolean of true or false?

console.log(validateHello('ahoj'), true);
console.log(validateHello('meh'), false);
*/

//declare constant variable which will be assigned to an arrow function
//set parameter
//declare res and assign to array of strings of different hellos
//reassign greetings (function's parameter) to all lowercase
//declare variable hallo and assign to empty array
//create for loop to iterate over res array
//push true or false into hallo array if greetings includes the current element in the res array
//return true or false if true is in the hallo array
const validateHello = greetings => {
    let res =  ["hello","ciao","salut","hallo","hola","ahoj","czesc"];
    greetings = greetings.toLowerCase();
    let hallo = [];
    for(let i = 0; i < res.length; i++){
      hallo.push(greetings.includes(res[i]));
    };
    return hallo.includes(true);
  };