/*
PatternCraft - Visitor

Complete the code so that when a Tank attacks a Marine it takes 21 damage and when a Tank attacks a Marauder it takes 32 damage.

The Marine's initial health should be set to 100 and the Marauder's health should be set to 125.

You have 3 classes:

Marine: has a health property and accept(visitor) method
Marauder: has a health property and accept(visitor) method
TankBullet: the visitor class. Has visitLight(unit) and visitArmored(unit) methods

arguments passed into the method's parameters:
for Marine => new object instance of TankBullet
for Marauder => new object instance of TankBullet
for TankBullet.visitLight() => new object instance of Marine
for TankBullet.visitArmored() => new object instance of Marauder

returns for the methods:
Marine.accept(visitor) should call the visitor's method visitLight passing in the this context of Marine
Marauder.accept(visitor) should call the visitor's method visitArmored passing in the this context of Marauder
under TankBullet the health of unit should subtract 21 for Marine and 32 for Marauder and reassign the difference to health

let bullet = new TankBullet();
let light = new Marine();
light.accept(bullet);
console.log(light.health, 100 - 21);

let bullet = new TankBullet();
let armored = new Marauder();
armored.accept(bullet);
console.log(armored.health, 125 - 32);
*/

class Marine {
    constructor() { this.health = 100; }
    accept(visitor) { visitor.visitLight(this); }
}
class Marauder {
    constructor() { this.health = 125; }
    accept(visitor) { visitor.visitArmored(this); }
}
class TankBullet {
    visitLight(unit) { unit.health -= 21; }
    visitArmored(unit) { unit.health -= 32; }
}