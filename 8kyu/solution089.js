/*
Terminal Game - Create Hero Prototype
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0

P.R.E.P.
parameters: string
return: object
examples:
attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0
pseudocode:
declare function
set parameter
declare attributes using the this keyword
assign this.name to name || 'Hero'
assign this.position to '00'
assign this.health to 100
assign this.damage to 5
assign this.experience to 0
*/

function Hero (name) {
    // add default values here
    this.name = name || 'Hero';
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }