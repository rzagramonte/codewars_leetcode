'''
Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

Will the parameter always be a string?
Will the string contain at least one '!'?
Will the return always be a string?
Will there be no '!' in the returned string?

print(removeExclamationMarks("Hello World!"), "Hello World")
print(remove_exclamation_marks("Hello World!!!"), "Hello World")
print(remove_exclamation_marks("Hi! Hello!"), "Hi Hello")
print(remove_exclamation_marks(""), "")
print(remove_exclamation_marks("Oh, no!!!"), "Oh, no")

//replace all instances of "!" with ""
'''

import re
def remove_exclamation_marks(s):
    #your code here
    return re.sub('!','',s)