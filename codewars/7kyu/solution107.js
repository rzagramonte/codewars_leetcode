/*
Refactored Greeting

The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

Here is how the final refactored code would be used:

var joe = new Person('Joe');
joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
joe.name           // should == 'Joe'

Will the parameter always be a string?
Will the return always be a string?

let jack = new Person('Jack');
let jill = new Person('Jill');
console.log(jack.name, 'Jack');
console.log(jill.name, 'Jill');
console.log(jack.greet('Jill'), 'Hello Jill, my name is Jack');
console.log(jill.greet('Jack'), 'Hello Jack, my name is Jill');
*/

/*
function greet(myName, yourName) {
  return `Hello ${yourName}, my name is ${myName}`;
}
*/

//create Person class
//instantiate constructor with name parameter and property
//create greet method that has yourName as parameter
//return string interpolating yourName and this.name from object instance
class Person{
    constructor(name){
      this.name=name;
    }
    greet(yourName){
      return `Hello ${yourName}, my name is ${this.name}`
    }
}