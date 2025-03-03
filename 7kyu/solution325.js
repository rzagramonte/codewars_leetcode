/*
Character Concatenation

Given a string, you progressively need to concatenate the first character from the left and the first character from the right and "1", then the second character from the left and the second character from the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

"abcdef"  --> "af1be2cd3"
"abc!def" --> "af1be2cd3" // same result

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(charConcat("abc def"),'af1be2cd3');
console.log(charConcat("CodeWars"),'Cs1or2da3eW4');

TODO:
iterate over half the string
add the character of str at the index
add the character of the reversed str at the index
add index + 1
return the resulting string
*/

const charConcat = str => {
    const revStr = [...str].reverse().join('');
    const halfLength = Math.floor(str.length/2);
    let result = '';
    for(let i = 0; i < halfLength; i++){
      result += `${str[i]}${revStr[i]}${i + 1}`;
    }
    return result;
  };