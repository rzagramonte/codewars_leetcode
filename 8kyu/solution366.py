'''
Beginner Series #4 Cockroach

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

Will the argument passed into the function's parameter always be a number representing speed in km/h?
Will the return always be a number representing speed in cm/s rounded down to the integer (=floored)?

print(cockroach_speed(1.08), 30)
print(cockroach_speed(1.09), 30)
print(cockroach_speed(0), 0)

return s * 27.778 rounded down to the nearest integer
'''

def cockroach_speed(s):
    import math
    return math.floor(s * 27.778)