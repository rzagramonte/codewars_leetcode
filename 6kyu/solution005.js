/*
Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

Will the parameter always be an array?
Can there be an empty input array?
If the input array has elements, will the elements always be strings?
Will the return always be a string?

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
*/


//declare a constant variable which will be assigned to an arrow function
//set parameter
//if the length of the input array is truthy when negated, return the appropriate string
//else if length of the input array is 1, return the appropriate string with the first element of the array interpolated into it
//else if length of the input array is 2, return the appropriate string with the first and second elements of the array interpolated into it
//else if length of the input array is 3, return the appropriate string with the first, second and third elements of the array interpolated into it
//else return the appropriate string with the first and second elements of the array interpolated into it as well as interpolating the length of the input array minus 2
const likes = names => !names.length ? "no one likes this"
                 : names.length == 1 ? `${names[0]} likes this`
                 : names.length == 2 ? `${names[0]} and ${names[1]} like this`
                 : names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this`
                 : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;