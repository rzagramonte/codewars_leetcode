'''
Even or Odd
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Will the parameter always be a number?
Will the return always be a string of either 'Even' or 'Odd'

print(even_or_odd(1), "Odd")
print(even_or_odd(2), "Even")
print(even_or_odd(-1), "Odd")
print(even_or_odd(-2), "Even")
print(even_or_odd(0), "Even")
'''

# return 'Even' if the negation of number mod 2 is true else return 'Odd'
def even_or_odd(number):
    return 'Even' if not number % 2 else 'Odd'