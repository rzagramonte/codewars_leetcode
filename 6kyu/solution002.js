/*
Count characters in your string
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Will the parameter always be a string?
Will the return always be an object?

console.log(count(''), {});
console.log(count('a'), {'a': 1});
console.log(count('ab'), {'a': 1, 'b': 1});
console.log(count('aba'), {'a': 2, 'b': 1});
console.log(count('ABC'), {'A': 1, 'B': 1, 'C': 1});
*/

//declare a constant variable which will be assigned to an arrow function
//set parameter
const count = string => {
    //declare variable and assign to object literal
    let countedChars = {};
    //iterate over string using for loop
    for(let i=0; i<string.length; i++){
        //if character is found in obj, add 1 and reassign the key to the new value
      if(string[i] in countedChars) countedChars[string[i]] += 1;
      //else add the character as a key into the obj and assign it to 1
        else countedChars[string[i]] = 1;
    };
    //return obj
     return countedChars;
  };