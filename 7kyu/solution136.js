/*
Mobile Display Keystrokes

Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how many keystrokes you have to do for a specific word.

This is the layout:


Given a string, return the number of keystrokes necessary to type it. You can assume that the input will entirely consist of characters included in the mobile layout (lowercase letters, digits, and the symbols * and #).

Examples
"*#"       =>  2 (1 + 1)
"123"      =>  3 (1 + 1 + 1)
"abc"      =>  9 (2 + 3 + 4)
"codewars" => 26 (4 + 4 + 2 + 3 + 2 + 2 + 4 + 5)

Will the parameter always be a string?
Will the return always be a number?

console.log(mobileKeyboard(""), 0);
console.log(mobileKeyboard("123"), 3);
console.log(mobileKeyboard("codewars"), 26);
console.log(mobileKeyboard("zruf"),16);
console.log(mobileKeyboard("thisisasms"), 37);
console.log(mobileKeyboard("longwordwhichdontreallymakessense"),107);
*/

//declare constant variable mobileKeyboard which will be assigned to an arrow function
//set parameter str
//replace all digits with '1'
//replace all letters with corresponding string representation of the number of key strokes
//spread the string into an array
//reduce the array converting each element to a number type
const mobileKeyboard = str => [...(str.replace(/\d|\W/g,'1').replace(/[adgjmptw]/g,'2').replace(/[behknqux]/g,'3').replace(/[cfilorvy]/g,'4').replace(/[sz]/g,'5'))].reduce((a,c)=>a+(+c),0);