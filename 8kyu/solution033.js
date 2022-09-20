/*
Are You Playing Banjo?
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

P.R.E.P.
parameters: a string name
return: a concatenated string with name
examples:
input => output
Robert => "Robert plays banjo"
Amanda => "Amanda does not play banjo"
pseudocode:
declare a function
set parameter name
let name = name.toLowerCase()
let char = split method on lowerName
if char[0] === r then return `${name} plays banjo` else return `${name} does not play banjo`
*/

function areYouPlayingBanjo(name) {
    // Implement me
    let lowerName = name.toLowerCase();
    let char = lowerName.split('');
    return (char[0]==='r' ? `${name} plays banjo` : `${name} does not play banjo`);
  }