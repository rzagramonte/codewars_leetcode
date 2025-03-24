/*
Gryffindor vs Slytherin Quidditch Game

It's the most hotly anticipated game of the school year - Gryffindor vs Slytherin! Write a function which returns the winning team.

You will be given two arrays with two values.

The first given value is the number of points scored by the team's Chasers and the second a string with a 'yes' or 'no' value if the team caught the golden snitch!

The team who catches the snitch wins their team an extra 150 points - but doesn't always win them the game.

gameWinners([150, 'yes'],[200, 'no']) //'Gryffindor wins!'
gameWinners([400, 'no'],[350, 'yes']) //'Slytherin wins!'
If the score is a tie return "It's a draw!""

** The game only ends when someone catches the golden snitch, so one array will always include 'yes' or 'no.' Points scored by Chasers can be any positive integer.

Will the arguments passed into the function always be an array?
Will the return always be a string?

console.log(gameWinners([100, 'yes'],[100, 'no']), "Gryffindor wins!")
console.log(gameWinners([350, 'no'],[250, 'yes']), "Slytherin wins!")
console.log(gameWinners([100, 'yes'],[250, 'no']), "It's a draw!")

reassign gryffindor to first element + 150 if the array includes "yes" else just the first element
reassign slytherin to first element + 150 if the array includes "yes" else just the first element
return correct string based on which value is greater or if they are the same
*/

const gameWinners = (gryffindor, slytherin) => {

    gryffindor = gryffindor.includes('yes') ? gryffindor[0] + 150 : gryffindor[0];
    slytherin = slytherin.includes('yes') ? slytherin[0] + 150 : slytherin[0];
    
    if(gryffindor > slytherin) return "Gryffindor wins!";
    if(gryffindor < slytherin) return "Slytherin wins!";
    if(gryffindor == slytherin) return "It's a draw!";
  };