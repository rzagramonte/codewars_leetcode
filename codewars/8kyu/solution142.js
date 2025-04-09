/*
The Wide-Mouthed frog!
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

Will the parameter always be a string?
Will the return always either be a string of 'small' or 'wide'?

console.log(mouthSize("toucan"),"wide");
console.log(mouthSize("ant bear"),"wide");
console.log("alligator"),"small");
*/

//declare function and set parameter
function mouthSize(animal) {
    // code here
    // use return keyword and ternary operator
    //animal in lowercase using toLowerCase method equals in value and type to 'alligator' as the condition
    //if condition is met 'small'
    //else return 'wide'
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
  
  }