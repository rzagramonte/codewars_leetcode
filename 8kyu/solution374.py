'''
I love you, a little , a lot, passionately ... not at all

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

Will the argument passed into the function's parameter always be a number?
Will the return always be a string?

print(how_much_i_love_you(7),"I love you")
print(how_much_i_love_you(3),"a lot")
print(how_much_i_love_you(6),"not at all")

return correct string based on number passed in
'''
how_much_i_love_you = lambda nb_petals: ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][(nb_petals-1) % 6]