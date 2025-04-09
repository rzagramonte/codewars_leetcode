/*
Colour Association

Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

Will the parameter always be an array?
Will the elements in the array always be arrays?
Will the return always be an array?
Will the elements in the return array always be objects?

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), [{white:"goodness"},{blue:"tranquility"}]);
console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]), [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]);
*/

//declare constant variable colourAssociation which will be assigned to an arrow function
//set parameter array
//map over array and for every element convert to object
const colourAssociation = array => array.map(e=>({[e[0]]:e[1]}));