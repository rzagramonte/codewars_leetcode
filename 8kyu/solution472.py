'''
Beginner - Lost Without a Map

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

Will the argument passed into the function's parameter always be a list of numbers?
Will the return always be a list of numbers?

print(maps([1, 2, 3]), [2, 4, 6]);
print(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
print(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
'''

maps = lambda a: list(map(lambda n: n*2,a))