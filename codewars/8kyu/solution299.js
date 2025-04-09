/*
Classy Classes

Classy Classes
Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

Task
Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

//initial code
class Person {
  constructor() {
  
  }
}

Will the parameters always be a string and a number?
Will the return always be a string?

var john = new Person('john', 34)
console.log(john.info, 'johns age is 34');
*/

//create class and constructor
class Person {
    //set parameters for constructor
    constructor(name,age) {
        //create properties with underscore convention indicating to not directly get or set properties
      this._name=name;
      this._age=age;
    }
    //create getter
    get info(){
        //return string and interpolate properties from constructor
      return `${this._name}s age is ${this._age}`;
    }
  }