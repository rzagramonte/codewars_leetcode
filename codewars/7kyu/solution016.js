/*
Jenny the youngest detective

Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
Spaces are not places, you need the actual letters. No spaces.
The returned word should be all lowercase letters.
if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(
Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

Will the parameters always be an array and a string?
Will the array always have three numbers as its elements/items?
Will the numbers always be positive?
Will the number always be whole numbers?

Will the return always be a string?
Will the string always be lowercase if it is not the string of "No mission today"?

console.log(missingWord([5, 0, 3], "I love you"), "ivy");
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"), "bay");
console.log(missingWord([12, 4, 6], "Good Morning"), "No mission today");
*/

//declare const variable and assign to arrow function
//set parameters
/*
const missingWord = (nums, str) => {
    // Jenny needs your help...
    //declare variable and assign to str where all spaces are removed and the string is forced to all lowercase
    let revisedStr = str.replaceAll(' ','').toLowerCase();
    //declare variable and assign it to nums sorted ascendingly 
    let sortedNums = nums.sort((a,b)=>a-b);
    //in revisedStr, if the character at the index of the number in the first, second, or third position in sortedNums is undefined, then return "No mission today"
    //else return the characters in those positions with no spacing using template literal
     return revisedStr[sortedNums[0]] === undefined || revisedStr[sortedNums[1]] === undefined || revisedStr[sortedNums[2]] === undefined ? "No mission today" : `${revisedStr[sortedNums[0]]}${revisedStr[sortedNums[1]]}${revisedStr[sortedNums[2]]}`;
  };
*/

//refactored code:
//remove all spaces from str and convert to lowercase
//sort nums ascendingly
//in str, if the character at the index of the number in the first, second, or third position in nums is falsy, then return "No mission today"
//else return the characters in those positions with no spacing using template literal
const missingWord = (nums, str) => {
    str = str.replaceAll(' ','').toLowerCase();
    nums.sort((a,b)=>a-b);
    return !(str[nums[0]]) || !(str[nums[1]]) || !(str[nums[2]]) ? "No mission today" : `${str[nums[0]]}${str[nums[1]]}${str[nums[2]]}`;
    };