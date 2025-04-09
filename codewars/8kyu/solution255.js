/*
Hello Happy Codevarrior!
VVhat ?!?
None of zese codevarriors seemz to remember hiz ovvn name!
Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..

Will the input be a function constructor and method added to the object?
Will the output be an object that can return the correct name?

var albert = new Warrior("Albert")
var boris  = new Warrior("Boris")

console.log(albert.toString(),"Hi! my name's Albert");
console.log(albert.name(),"Albert");
console.log(boris.name(),"Boris");
boris.name("Bobo")
console.log(boris.name(),"Bobo");
*/

//create constructor function
//set parameter n
function Warrior(n){
    //create local variable name and assign it to n
    //this creates a private property that is function scoped
    let name = n;
    //create method
    //this creates a getter/setter method for the private variable
    this.name = function(n){
        //if n is truthy, reassign name to n, else return name
        return n ? name = n : name;
    }
}

//create method called toString
Warrior.prototype.toString = function(){
    //return string using template literal and interpolate the getter/setter from Warrior
    return `Hi! my name's ${this.name()}`;
}
  
