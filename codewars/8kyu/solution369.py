'''
Convert a String to a Number!

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

Will the argument passed into the function's parameter always be a string?
Wil the return always be a number?

print(string_to_number("1234"),1234);
print(string_to_number("605"), 605);
print(string_to_number("1405"),1405);
print(string_to_number("-7"),  -7);

return number from string
'''
string_to_number = lambda s: int(s)