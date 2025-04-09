/*
Ninja vs Samurai: Strike

Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70
Can you figure out what is wrong?

old code
var Warrior = function(name){
  this.name = name;  
  this.health = 100;
}

Warrior.strike = function(enemy, swings){
  enemy.health = Math.max(0, enemy.health - (swings * 10));   
}

Will the parameter always be a string for the Warrior constructor?
Will the parameter for the strike method always be two numbers?
Will the return for the Warrior constructor be an object with two key-value pairs?
Will the return for the strike method be a number which is assigned to the health key in the enemy object?
*/

var Warrior = function(name){
    this.name = name;  
    this.health = 100;
  }
  //add prototype between Warrior and strike to add the method to the prototype chain; this will allow for the application of the method to all Warrior object instances
  Warrior.prototype.strike = function(enemy, swings){
    enemy.health = Math.max(0, enemy.health - (swings * 10));   
  }