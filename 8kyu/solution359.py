'''
Well of Ideas - Easy Version

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

filter out 'bad' from x and return the length of the modified array
if x is less than or equal to 2 and truthy, return 'Publish!'
else if x is greater than 2, return 'I smell a series', else return 'Fail!'

Will the argument always be an array?
Will the elements of the input array always be a string of 'good' or 'bad'?
Will the strings always be lowercase?
Will the return always be 'Publish!' or 'I smell a series!' or 'Fail!'?

print(well(['bad','bad','bad']),'Fail!')
print(well(['good','bad','bad','bad','bad']), 'Publish!')
print(well(['good','bad','bad','bad','bad','good','bad','bad','good']), 'I smell a series!')

'''

def well(x):
    x = len(list(filter(lambda e: e == 'good', x)))
    return 'Publish!'if x <= 2 and x else 'I smell a series!' if x > 2 else 'Fail!'
