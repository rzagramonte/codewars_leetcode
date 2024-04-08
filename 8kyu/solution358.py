'''
Rock Paper Scissors!

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

Will the arguments passed into the function's parameters always be two strings?
Will the return always be one string?
examples:
(Input1, Input2 --> Output):
print(rps("scissors", "paper"), "Player 1 won!")
print(rps("scissors", "rock"), "Player 2 won!")
print(rps("paper", "paper"), "Draw!") --> 

create if else statement to return appropriate string based on certain string combos
'''

def rps(p1, p2):
    #your code here
    if (p1 == "scissors" and p2 == "paper") or (p1 == "rock" and p2 == "scissors") or (p1 == "paper" and p2 == "rock"):
        return "Player 1 won!"
    elif p1 == p2:
        return "Draw!"
    else: return "Player 2 won!"
