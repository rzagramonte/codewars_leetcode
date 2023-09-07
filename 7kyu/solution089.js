/*
Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Will the parameter always be a string?
Will the return always be a boolean of true or false?

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);
*/


//declare a constant variable XO which will be assigned to an arrow function
//set parameter str
//declare variable x and assign to 0
//declare variable o and assign to 0
//iterate over str using for...of
//convert str to all lowercase
//if char is equal in value to 'o', increment variable o
//else if char is equal in value to 'x', increment variable x
//return true or false if x is equal in value to o
const XO = str => {
    let x = 0;
    let o = 0;
    for(const char of str.toLowerCase()){
      if(char == 'o') o++;
      else if(char == 'x') x++;
    }
    return x == o;
  };