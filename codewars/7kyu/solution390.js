/*
Capitals first!

Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log("hey You, Sort me Already!"), "You, Sort Already! hey me");

TODO:
split the string into words into an array
create new array for caps and lowercase
iterate over the split string
create regex to check by: lower and uppercase letters
if the first character of the string is a lower or uppercase letter:
if the first letter is an lowercase, push the word into the lowercase arr
if the first letter is an uppercase, push the word into the caps arr
return caps and lowercase words into a string if both arrays have a length over 0
else if the length of caps array is falsy return the lowercase array as a string
else return the caps array as a string
*/

const capitalsFirst = (str) => {
  str = str.split(" ");
  let caps = [];
  let lowercase = [];

  for (const s of str) {
    const regex = /[a-z]/gi;
    if (regex.test(s[0])) {
      if (s[0] == s[0].toLowerCase()) lowercase.push(s);
      if (s[0] == s[0].toUpperCase()) caps.push(s);
    }
  }
  return caps.length > 0 && lowercase.length > 0 ? `${caps.join(" ")} ${lowercase.join(" ")}` : !caps.length ? lowercase.join(" ") : caps.join(" ");
};
