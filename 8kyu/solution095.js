/*
Define a card suit

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

P.R.E.P.
parameters: a string
return: a string
example:
input => output
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
pseudocode:
declare function
set parameter
declare variable cardSuit and set it equal to card[card.length-1]
create switch case statement to return the strings
*/

function defineSuit(card) {
    // good luck
    let cardSuit = card[card.length-1];
    switch(cardSuit){
        case '♣':
            return 'clubs';
            break;
        case '♦':
            return 'diamonds';
            break;
        case '♥':
            return 'hearts';
            break;
        case '♠':
            return 'spades';
            break;
    }
  }