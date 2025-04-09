'''
simple calculator

You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
arguments: 1, 2, "+"
should return 3

arguments: 1, 2, "&"
should return "unknown value"

arguments: 1, "k", "*"
should return "unknown value"
Good luck!

Can the parameters be numbers or strings?
Will the return always be a number or string?

print(calculator(1,2,"+"), 3);
print(calculator(1,2,"-"), -1);
print(calculator(3,5,"*"), 15);
print(calculator(6,2,"/"), 3);
print(calculator(6,2,"$"), "unknown value");
print(calculator(6,"h","*"), "unknown value");

if either a or b is not a number, return "unknown value"
else return a number if sign matches any of the cases
else return "unknown value"
'''

def calculator(x, y, op):
    if isinstance(x, (int, float)) and isinstance(y, (int, float)):
        match op:
            case "+":
                return x + y
            case "-":
                return x - y
            case "*":
                return x * y
            case "/":
                return x / y
            case _:
                return "unknown value"
    else:
        return "unknown value"