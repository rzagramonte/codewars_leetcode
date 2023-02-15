/*
Fun with ES6 Classes #1 - People, people, people

Define a class Person with the following properties:

A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.

Will the parameters always be strings and numbers, or none?
Will the return always be a string or a number?

let john = new Person();
console.log(john.firstName, "John");
let jane = new Person("Jane", "Doe", 25, "Female");
console.log(jane.firstName, "Jane");
console.log(Person.greetExtraTerrestrials("Martians"), "Welcome to Planet Earth Martians");
*/

//declare class with constructor, method, and class/static method
class Person {
    // Get coding in ES6 :D
    //constructor with defaults assigned to parameters
    constructor(firstName = "John",lastName = "Doe",age = 0,gender = "Male"){
        //properties using this keyword
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
    //method that returns first and last name as a string using template literal
    sayFullName(){
      return `${this.firstName} ${this.lastName}`;
    }
    //static method with string parameter that returns string with interpolated variable using a template literal
    static greetExtraTerrestrials(raceName){
      return `Welcome to Planet Earth ${raceName}`;
    }
  }