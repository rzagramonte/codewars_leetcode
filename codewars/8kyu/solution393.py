'''
Filtering even numbers (Bug Fixes)

Fix the bug in Filtering method
The method is supposed to remove even numbers from the list and return a list that contains the odd numbers.

However, there is a bug in the method that needs to be resolved.

Will the argument passed into the function's parameter always be a list of numbers?
Will the return always be a list of numbers?

print(kata_13_december([1, 2, 2, 2, 4, 3, 4, 5, 6, 7]), [1, 3, 5, 7])
print(kata_13_december([1, 2, 2, 2, 4, 3, 4]), [1, 3])

TODO:
iterate over the list from end to start
if number is even, remove it
return modified list
'''

def kata_13_december(lst): 
    for i in range(len(lst)-1, -1, -1): 
        if not lst[i]%2: 
            lst.pop(i)
    return lst