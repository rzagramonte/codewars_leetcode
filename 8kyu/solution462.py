'''
Fundamentals: Return

Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b

Will the arguments passed into the function's parameters always be two numbers?
Will the return always be the result of the two numbers with different operations applied to them?

print(add(1,2), 3);
print(divide(2,1), 2);
print(multiply(1,2), 2);
print(mod(1,2), 1);
print(exponent(1,2), 1);
print(subt(1,2), -1);

use return keyword and appropriate operators between the variables for the functions
'''

def add(a, b):
    return a+b

def multiply(a, b):
    return a*b

def divide(a, b):
    return a/b

def mod(a, b):
    return a%b

def exponent(a, b):
    return a**b

def subt(a, b):
    return a-b