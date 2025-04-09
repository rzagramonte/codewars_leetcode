/*
I love you, a little , a lot, passionately ... not at all
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
If there are more than 6 petals, you start over with "I love you" and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

P.R.E.P.
parameters: number
return: string
example:
1 => I love you
2 => a little
3 => a lot
4 => passionately
5 => madly
6 => not at all
7 => I love you
8 => a little
9 => a lot
10 => passionately
11 => madly
12 => not at all
13 => I love you
14 => a little
15 => a lot
16 => passionately
17 => madly
18 => not at all

pseudocode:
declare function
set parameter
declare variable petals and assign it to an array with the elements listed as each possible string in order
return petals[(nbPetals-1) % 6]
*/

function howMuchILoveYou(nbPetals) {
    let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return petals[(nbPetals-1) % 6];
  }