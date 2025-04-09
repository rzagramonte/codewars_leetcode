/*
Classy Extensions
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.
Task
Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

Will the only input be the Animal class and the name attribute passed with this.name?
Will the return be a string?

var cat = new Cat('Mr Whiskers');
console.log(cat.speak(),'Mr Whiskers meows.');
cat = new Cat('Lamp');
console.log(cat.speak(),'Lamp meows.');
cat = new Cat('$$Money Bags$$');
console.log(cat.speak(),'$$Money Bags$$ meows.');
*/

//declare class Cat and use extend keyword to extend the Animal class
class Cat extends Animal {
    //add method
    speak(){
        //return string using template literal
        //should return 'name meows'
        //use this.name as the variable to interpolate into string
      return `${this.name} meows.`;
    }
  }