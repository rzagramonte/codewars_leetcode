/*
Simple Fun #261: Whose Move

Task
Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

Input/Output
[input] string lastPlayer/$last_player

"black" or "white" - whose move it was during the previous round.

[input] boolean win/$win

true if the player who made a move during the previous round won, false otherwise.

[output] a string

Return "white" if white is to move on the next round, and "black" otherwise.

Example
For lastPlayer = "black" and win = false, the output should be "white".

For lastPlayer = "white" and win = true, the output should be "white".

const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){ 
it("It should works for basic tests.", function(){

Test.assertEquals(whoseMove("black",false),"white")

Test.assertEquals(whoseMove("white",true),"white")

Test.assertEquals(whoseMove("white",false),"black")

})})
*/

const whoseMove = (lastPlayer, win) => win?lastPlayer:lastPlayer=="white"?"black":"white";