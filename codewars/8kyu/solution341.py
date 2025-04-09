'''
Ensure question

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"

Will the parameter always be a string?
Will the return always be a string?

pring(ensure_question(""),"?")
pring(ensure_question("Yes"),"Yes?")
pring(ensure_question("No?"),"No?")
pring(ensure_question("Well????"),"Well????")
'''

# return string with question mark at the end if string is falsy or if string is truthy and the last character in the string is not a question mark, else return string
def ensure_question(s):
    # Code here
    return f"{s}?" if not s or s and s[-1] != '?' else s