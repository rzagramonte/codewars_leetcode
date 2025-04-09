'''
Fix the loop!

Your collegue wrote an simple loop to list his favourite animals. But there seems to be a minor mistake in the grammar, which prevents the program to work. Fix it! :)

If you pass the list of your favourite animals to the function, you should get the list of the animals with orderings and newlines added.

For example, passing in:

animals = [ 'dog', 'cat', 'elephant' ]
will result in:

list_animals(animals) == '1. dog\n2. cat\n3. elephant\n'

Will the argument passed into the function's parameter always be a list of strings?
Will the return always be a string?

print(list_animals([ 'dog', 'cat', 'elephant' ]), '1. dog\n2. cat\n3. elephant\n')
print(list_animals([ 'bird', 'parrot', 'elephant', 'giraffe' ]), '1. bird\n2. parrot\n3. elephant\n4. giraffe\n')
print(list_animals([ 'pig', 'frog', 'hamster', 'mouse', 'sloth' ]), '1. pig\n2. frog\n3. hamster\n4. mouse\n5. sloth\n')

TODO:
create empty string assigned to variable
iterate over the length of the input array
add each animal in format: i+1. animal\n
return string
'''

def list_animals(animals):
    lst = ''
    for i in range(len(animals)):
        lst += str(i + 1) + '. ' + animals[i] + '\n'
    return lst