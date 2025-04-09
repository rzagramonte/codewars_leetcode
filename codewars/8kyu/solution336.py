'''
Template Strings

Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```

Will the parameter always be two strings?
Will the return be the result of the two strings concatenated with "are" in between?

print(temple_strings("Animals","Good"), 'Animals are Good')
print(temple_strings("Animals","Good"), 'Animals are Good')
print(temple_strings("You","Special"), 'You are Special')
print(temple_strings("lives","frozen"), 'lives are frozen')
'''

# return string interpolating obj and feature surrounding are
def temple_strings(obj, feature): 
    # your code here
    return f"{obj} are {feature}"