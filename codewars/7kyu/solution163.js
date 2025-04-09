/*
Mispelled word

Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

Will the parameter always be two strings?
Will the return always be a boolean of true or false.

console.log(mispelled('versed', 'xersed'), true);
console.log(mispelled('versed', 'applb'), false);
console.log(mispelled('versed', 'v5rsed'), true);
console.log(mispelled('1versed', 'versed'), true);
console.log(mispelled('versed', 'versed1'), true);
console.log(mispelled('versed', 'aversed'), true);
console.log(mispelled('aaversed', 'versed'), false);
console.log(mispelled('versed', 'aaversed'), false);
*/

//declare constant function and set parameters
//if the length different of word1 and word2 is greater or equal to 2, return false
//if the different equals 1, return true or false if if word1 includes word2 or vice verse
//if the letter at index i in word1 doesnt not equal the letter, add 1 to res
//if res is less than or equal to 1, return true else return false
const mispelled = (word1, word2) => {
    if(Math.abs(word1.length - word2.length) >= 2) return false; 
    if(Math.abs(word1.length - word2.length) == 1) return (word1.includes(word2) || word2.includes(word1));
    
    let res = 0;
    for(let i = 0; i < word1.length; i++){
      if(word1[i] !== word2[i]) res += 1;
    };
    
    if(res <= 1) return true;
    else return false;
  };
  