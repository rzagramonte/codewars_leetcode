/*
Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

Will the parameter always be a string?
May the string contain 0 or more vowels in the aeiou variety?
Will the return always be a number?
Will the returned number be a whole number greater than or equal to 0?


console.log(getCount("abracadabra"), 5);
*/

//declare constant variable getCount which will be assigned to an arrow function
//set parameter str
//declare variable count and assign to 0
//create for loop to iterate over str
//if character is a match to aeiou, add 1 to count
//return count
const getCount = str => {
    let count = 0;
    for(let i=0; i<str.length; i++){
      if(str[i].match(/[aeiou]/g)) count +=1;
    }
    return count;
  };