/*
esrever esreveR!

In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.

But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

A few examples should help clarify:

esrever("hello world.") == "dlrow olleh."

esrever("Much l33t?") == "t33l hcuM?"

esrever("tacocat!") == "tacocat!"
Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.

Will the argument always be a string?
Will the return always be a string?

console.log(esrever('an Easy one?'), 'eno ysaE na?')
console.log(esrever('a small lOan OF 1,000,000 $!'), '$ 000,000,1 FO naOl llams a!')
console.log(esrever('<?> &!.".'), '".!& >?<.')
console.log(esrever('b3tTer p4ss thIS 0ne.'), 'en0 SIht ss4p reTt3b.')
console.log(esrever(''), '', "Empty string!" )

TODO:
if str is "", return an ""
else return:
slice the string up until the last character
split that by words
iterate over each string
spread each string into an array, reverse, and join it back
join back the words and reverse the words then add the last char back to the end of the str
*/

const esrever = (str) => !str ? "" : str.slice(0,-1).split(' ').map(s=>[...s].reverse().join('')).reverse().join(' ') + str[str.length-1];