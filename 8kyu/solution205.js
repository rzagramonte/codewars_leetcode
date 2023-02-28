/*
ASCII Total

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291

Will the parameter always be a string?
Will the return always be a number?

console.log(uniTotal(""), 0);
console.log(uniTotal("a"), 97);
console.log(uniTotal("b"), 98);
console.log(uniTotal("c"), 99);
console.log(uniTotal("d"), 100);
console.log(uniTotal("e"), 101);
console.log(uniTotal("aaa"), 291);
console.log(uniTotal("Mary Had A Little Lamb"), 1873);
*/

//declare variable and assign to arrow function
const uniTotal = string => {
    // total up dem unicodes!
    //declare variable and assign to number 0
      let total = 0;
      //if the length of string is greater than 1
      if(string.length > 1){
        //create for loop to iterate over string adding the character code of each charater to the total
        for(let i = 0; i < string.length; i++){
          total += string.charCodeAt(i);
        }
        //return that total
        return total;
        //if string is not truthy aka an empty string in this case
      }else if(!string){
        // return 0
        return 0;
      }else{
        //default to returning the character code of the first and only character of the string
        return string.charCodeAt(0);
      }
    };