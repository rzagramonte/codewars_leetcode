/*
Odd-Even String Sor

Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'

Will the parameter always be a string?
Will the return always be a string?

console.log(sortMyString("CodeWars"), "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");
*/

//declare const variable and assign to arrow function
//set parameter
const sortMyString = S => {
    //declare variable and assign to empty array
    let even = [];
    //declare variable and assign to empty array
    let odd = [];
    //create for loop
    for(let i = 0; i < S.length; i++){
        //if index is divisible by 2, then push element into even
        //else push element into odd
      i % 2 === 0 ? even.push(S[i]) : odd.push(S[i]);
    };
    //return even odd joined into string with one space between even and odd
    return `${even.join('')} ${odd.join('')}`;
  };