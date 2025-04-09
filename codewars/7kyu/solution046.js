/*
FIXME: Get Full Name

The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.

Will the parameters always be two strings?
Can either parameter be undefined?
Will the return always be a string?

old code
class Dinglemouse{

  constructor( firstName, lastName ){
  }
  
  getFullName(){
    return firstName+" "+lastName
  }
  
}
*/

//create class and capitalize class name to abide by convention
class Dinglemouse{
//create constructor and set two parameters to hold first and last names
    constructor( firstName, lastName ){
        //use this keyword for each property to assign the properties to the object instances
        //assign properties to the parameters
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    //create method that will act as a getter to get and return a value depending on the validity of the object's properties
    getFullName(){
        // is the negation of this.firstName truthy? then return the value of this.lastName
        // is the negation of this.lastName truthy? then return the value of this.firstName
        //else return the full name
        return !this.firstName ? this.lastName : !this.lastName ? this.firstName :`${this.firstName} ${this.lastName}`;
    }
    
  }