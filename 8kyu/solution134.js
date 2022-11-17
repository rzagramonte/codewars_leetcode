/*
Check same case
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

Will the parameters always be two strings?
Will the return always be a number of either 0, -1, 1

console.log(sameCase('C', 'B'), 1)
console.log(sameCase('b', 'a'), 1)
console.log(sameCase('d', 'd'), 1)
console.log(sameCase('A', 's'), 0)
console.log(sameCase('c', 'B'), 0)
console.log(sameCase('b', 'Z'), 0)
console.log(sameCase('\t', 'Z'), -1)
console.log(sameCase('H', ':'), -1)
*/

//declare function and set parameters
function sameCase(a, b){
    //If either of the characters is not a letter, return -1
    //if a as lowercase and a as uppercase equals in both in value and type or if b as lowercase and b as uppercase equals in both value and type then return -1
    if(a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()){
      return -1;
    
    //If both characters are the same case, return 1
    //if a as lowercase equals in value and type to a and if b as lowercase equals in value and type to b or if a as uppercase equals in value and type to a and if b as uppercase equals in value and type to b then return 1
    }else if(a.toLowerCase() === a && b.toLowerCase() === b || a.toUpperCase() === a && b.toUpperCase() === b){
      return 1;
    
    //If both characters are letters, but not the same case, return 0
    //if a as lowercase equals in value and type to a and b as uppercase equals in value to b or if a as uppercase equals in value and type to and and if b as lowercase equals in value and type to b then return 0
    }else if(a.toLowerCase() === a && b.toUpperCase() === b || a.toUpperCase() === a && b.toLowerCase() === b){
      return 0;
    }
  }