/*
Highest Scoring Word

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. For example, the score of abad is 8 (1 + 2 + 1 + 4). You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');   
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');

TODO:
create object for word as keys and its score as the values
iterate through words in the string to set the word as a key in the object and the sum as the value for the score
return the value in the object that contains the highest score
*/

const high = x => {
    const words = {};
    for(const word of x.split(' ')){ words[word] = [...word].reduce((a,c,i)=>a+(word.charCodeAt(i)-96),0) };
    return Object.keys(words)[Object.values(words).indexOf(Math.max(...Object.values(words)))];
  };