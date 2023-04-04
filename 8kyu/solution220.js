/*
Grasshopper - Function syntax debugging

Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

Will the input be a function with several syntax mistakes?
Will the input always have at least one syntax mistake?
Will the output be a function with all syntax mistakes corrected?
Will the function be able to be called after said syntax mistakes have been corrected?

console.log(main('take ', 'item'), 'take item');
console.log(main('use ', 'sword'), 'use sword');
*/

//changed square brackets to parenthesis
//added open curly braces after parameters
//added semicolon to the end of noun
function main (verb, noun){
    return verb + noun;
  }