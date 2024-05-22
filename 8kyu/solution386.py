'''
Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

Will the parameters always be a string representation of the 4 arthmetic operators and two numbers?
Will the return always be a number?

print(basicOp('+', 4, 7), 11)
print(basicOp('-', 15, 18), -3)
print(basicOp('*', 5, 5), 25)
print(basicOp('/', 49, 7), 7)
*/

create match case statement to go through each operator in the form of a string
return the evaluated numbers
'''

def basic_op(operator, value1, value2):
    match operator:
        case '+': return value1 + value2
        case "-": return value1 - value2
        case "*": return value1 * value2    
        case "/": return value1 / value2