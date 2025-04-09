'''
Swap Values

I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

Will the parameter always be a list of two numbers?
Will the return always be a list of the two input numbers swapped?

print(swap_values([1, 2]), [2, 1])
'''

# create temp variable and assign to the value of the first element of list
#reassign first element to the value of the second
#reassign the second value to the value held in temp
def swap_values(args): 
    temp = args[0]
    args[0] = args[1]
    args[1] = temp