/*
Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

Will the parameter always be a string?
Will the return always be an array?
Will the elements of the returned array always be strings?
Will the length of the returned array always be 2?

console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
*/


//declare constant variable capitalize which will be assigned to arrow function
//set parameter s
//spread s into an array
//map over said array
//is the negation of i modulus 2 truthy? return l caps else return l
//do the opposite
//join both arrays into a string
//return [even, odd]
const capitalize = s => [[...s].map((l,i)=>!(i%2)?l.toUpperCase():l).join(''),[...s].map((l,i)=>i%2?l.toUpperCase():l).join('')];