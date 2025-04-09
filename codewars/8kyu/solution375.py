'''
Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1^2+2^2+2^2=9.

Will the argument passed into the function's parameter always be a list of numbers?
Will the return always be a number?

print(square_sum([1,2]), 5)
print(square_sum([0, 3, 4, 5]), 50)
print(square_sum([]), 0)
print(square_sum([-1,-2]), 5)
print(square_sum([-1,0,1]), 2)
'''

#sum each number squared
square_sum = lambda numbers: sum(x ** 2 for x in numbers)