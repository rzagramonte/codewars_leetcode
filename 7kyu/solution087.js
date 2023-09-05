/*
ASCII letters from Number

You have to create a function that converts integer given as string into ASCII uppercase letters or spaces.

All ASCII characters have their numerical order in table.

For example,

from ASCII table, character of number 65 is "A".
Numbers will be next to each other, So you have to split given number to two digit long integers.

Examples (input -> output)
'658776' -> 'AWL' (because in ASCII table 'A' is 65, 'W' is 87, 'L' is 76)
'73327673756932858080698267658369' ->'I LIKE UPPERCASE'
Good Luck!

Will the parameter always be a string?
Will the return always be a string?

console.log(convert("65"),"A");
console.log(convert("656667"),"ABC");
console.log(convert("676584"),"CAT");
console.log(convert("73327673756932858080698267658369"),"I LIKE UPPERCASE");
*/

//declare constant variable convert which will be assigned to an arrow function
//set parameter
//declare constant variable splitStrings and assign it to an empty array
//create for loop that updates the iterator variable by adding 2
//push the substring of the element at the current index up until but not inclusive the index + 2 into splitStrings
//return the following:
//splitStrings as a new array
//iterating over the old array create a new element for the new array as the letter from the character code of the old element
//join this new array with no spacing
const convert = number => {
    const splitStrings = [];
    for (let i = 0; i < number.length; i += 2) {
      splitStrings.push(number.slice(i, i + 2));
    }
    return splitStrings.map(e=>String.fromCharCode(e)).join('');
  };