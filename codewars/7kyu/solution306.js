/*
Make the small words big!

Life isn't always easy as a small word amongst big words. If only they had a code warrior to help them out...Your task is to make all words which are 3 characters or less into capitals. You should also remove any vowels from 'long' (4 characters or more) words.
For example:
"The quick brown fox jumps over the lazy dog"
Should become:
"THE qck brwn FOX jmps vr THE lzy DOG"
For the purposes of this kata, mid-word punctuation counts towards the character limit of a word.
e.g: "it's / I'm" should become: "t's / I'M"

Will the argument passed into the function always be be a string?
Will the return always be a string?

console.log(smallWordHelper("The quick brown fox jumps over the lazy dog"), "THE qck brwn FOX jmps vr THE lzy DOG");
console.log(smallWordHelper("I'm just a small word from a small word family"), "I'M jst A smll wrd frm A smll wrd fmly");

TODO:
transform string to array of strings separated by space
iterate over array
length of word 4 or greater? remove vowels
else transform the word to all caps
return as a joined string by space
*/

const smallWordHelper = s => s.split(' ').map(w => w.length >= 4 ? w.replace(/[aeiou]/gi, '') : w.replace(/[a-z]/g, l => l.toUpperCase())).join(' ');