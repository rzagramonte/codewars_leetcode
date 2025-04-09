'''
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

Will the argument passed into the function's parameter always be a string?
Will the return always be a string?
Will the returned string always have any character minus lower or upper case vowels replaced with "!"?

print(replace("Hi!") , "H!!");
print(replace("!Hi! Hi!") , "!H!! H!!");
print(replace("aeiou") , "!!!!!");
print(replace("ABCDE") , "!BCD!");


//replace all instances of lower and uppercase vowels with "!"
'''
import re
def replace_exclamation(st):
    return re.sub('(?i)[aeiou]','!',st)