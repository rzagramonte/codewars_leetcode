/*
Training JS #21: Methods of String object--trim() and the string template

Task
Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.

Example:

fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it
fiveLine("  xy ") 
should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
xy
xyxy
xyxyxy
xyxyxyxy
xyxyxyxyxy  <---The effect when you console.log it

Will the parameter always be a string?
Will the return always be a string?

console.log(fiveLine("  a") , "a\naa\naaa\naaaa\naaaaa");
console.log(fiveLine("\txy \n") , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
console.log(fiveLine("           Ok               ") , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");
*/

//trim the input string
//create new string and interpolate s into it with new line break
//create for loop starting from 2 inclusive and ending at 5 exclusive
//repeat s by i adding new line break and adding this to new string
//return new string with s repeated 5 times at the end
const fiveLine = s => {
    //coding here...
    s = s.trim();
    let newS = `${s}\n`;
    for(let i=2; i<5;i++){
      newS += `${s.repeat(i)}\n`;
    };
    return `${newS}${s.repeat(5)}`;
  };