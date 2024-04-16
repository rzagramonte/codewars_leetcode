'''
Grasshopper - Combine strings

Combine strings function
Create a function named (combine_names) that accepts two parameters (first and last name). The function should return the full name.

Example:

combine_names('James', 'Stevens')
returns:

'James Stevens'

Will the arguments passed into the function's parameters always be two strings?
Will the return always be one string?
Will the returned string be comprised of the two input strings with a space between them in the order received?

print(combineNames('James', 'Stevens'), 'James Stevens');

return string of s_1 and s_22 with a space between them
'''
combine_names = lambda s_1, s_2: f'{s_1} {s_2}'