'''
All Star Code Challenge #18

Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1

Will the arguments passed into the function's parameters always be two strings?
Will the return always be a number?

print(str_count('hello', 'l'), 2)
print(str_count('codewars', 'c'), 1)
print('', 'z'), 0)
'''

str_count = lambda strng, letter: strng.count(letter)