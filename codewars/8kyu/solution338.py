'''
Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!

Will the parameter always be a string?
Will the return always be a string with each character doubled?

print(double_char("String"),"SSttrriinngg")
print(double_char("Hello World"),"HHeelllloo  WWoorrlldd")
print(double_char("1234!_ "),"11223344!!__  ")
'''

#create new string
#iterate over s
#add char twice to new string
#return new string
def double_char(s):
    newS = ''
    for char in s:
        newS += char + char
    return newS