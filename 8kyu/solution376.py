'''
Sum The Strings

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

Will the arguments passed into the function's parameters always be two strings of numbers?
Will the return always be a string?

print(sum_str("4","5"), "9")
print(sum_str("34","5"), "39")
print(sum_str("9",""), "9", "x + empty = x")
print(sum_str("","9"), "9", "empty + x = x")
print(sum_str("","") , "0", "empty + empty = 0")
'''

#add strings as numbers and return sum as a string
sum_str = lambda a, b: str(int(a if a else '0')+int(b if b else '0'))