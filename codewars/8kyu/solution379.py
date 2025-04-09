'''
Array plus array

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

Will the arguments passed into the function's parameters always be two lists of numbers?
Will the return always be a number?

print(array_plus_array([1, 2, 3], [4, 5, 6]), 21)
print(array_plus_array([-1, -2, -3], [-4, -5, -6]), -21)
print(array_plus_array([0, 0, 0], [4, 5, 6]), 15)
print(array_plus_array([100, 200, 300], [400, 500, 600])
'''

#concat the arrays and sum the elements
array_plus_array = lambda arr1,arr2: sum(arr1 + arr2)