'''
Powers of 2

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

Will the argument passed into the function's parameter always be a non-negative integer?
Will the return always be a list of non-negative integers?

print(powers_of_two(0),[1])
print(powers_of_two(1),[1, 2])
print(powers_of_two(2),[1, 2, 4])
'''

#return list of non-negative integers of all powers of 2 with range of n+1
def powers_of_two(n):
    return list(map(lambda i: 2 ** i, range(n+1)))

