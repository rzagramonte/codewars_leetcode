/*
Barking mad

Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.

P.R.E.P.
parameter: none
return: a string
example: scoobydoo.bark(); // return "Woof"
pseudocode:
declare variable Dog.prototype.bark and assign it to an anon function that returns "Woof"
*/

function Dog (breed) {
    this.breed = breed;
}
  
var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

Dog.prototype.bark = function() {
    return "Woof";
};
  

