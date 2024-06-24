'''
Thinkful - Dictionary drills: Order filler

You're running an online business and a big part of your day is fulfilling orders. As your volume picks up that's been taking more of your time, and unfortunately lately you've been running into situations where you take an order but can't fulfill it.

You've decided to write a function fillable() that takes three arguments: a dictionary stock representing all the merchandise you have in stock, a string merch representing the thing your customer wants to buy, and an integer n representing the number of units of merch they would like to buy. Your function should return True if you have the merchandise in stock to complete the sale, otherwise it should return False.

Valid data will always be passed in and n will always be >= 1.

Will the arguments passed into the function's parameters always be a dictionary, a string, and a number?
Will the return always be a boolean of True or False?

print(fillable(stock, 'football', 3), True)
print(fillable(stock, 'leggos', 2), False)
print(fillable(stock, 'action figure', 1), False)

TODO:
compare value from dict to number if it exists
else return False
'''

fillable = lambda stock, merch, n: stock[merch] >= n if merch in stock else False