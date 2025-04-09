'''
How do I compare numbers?

What could be easier than comparing integer numbers? However, the given piece of code doesn't recognize some of the special numbers for a reason to be found. Your task is to find the bug and eliminate it.

Will the argument passed into the function's parameter always be an integer?
Will the return always be a string?

print(what_is(0), 'nothing')
print(what_is(123), 'nothing')
print(what_is(-1), 'nothing')
print(what_is(42), 'everything')
print(what_is(42 * 42), 'everything squared')

TODO:
find the bug and solve
converted second is to == since 1764 is not cached
'''

def what_is(x):
    if x is 42:
        return 'everything'
    elif x == 42 * 42:
        return 'everything squared'
    else:
        return 'nothing'