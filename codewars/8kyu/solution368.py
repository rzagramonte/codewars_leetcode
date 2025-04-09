'''
Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

Will the argrument passed into the function's paramter always be a list of integers?
Will the return always be either a list of negated integers or an empty list?

print(invert([1,2,3,4,5]),[-1,-2,-3,-4,-5])
print(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])
print(invert([]), [])
'''

def invert(lst):
    return list(map(lambda e: -e, lst)) if lst else []