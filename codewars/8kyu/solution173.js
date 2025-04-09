/*
Is there a vowel in there?

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

Will the parameter always be an array of numbers?
Will the return always be am array of numbers and strings?

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
*/

//declare variable and set parameter
function isVow(a){
    //create for loop
    for(let i = 0; i < a.length; i++){
        //set switch case statement for vowels
        switch (a[i]) {
            case 97:
                a[i] = 'a'
                break;
            case 101:
                a[i] = 'e'
                break;            
            case 105:
                a[i] = 'i'
                break;            
            case 111:
                a[i] = 'o'
                break;            
            case 117:
                a[i] = 'u'
                break;
        }
    }
    //return a
    return a;
  }