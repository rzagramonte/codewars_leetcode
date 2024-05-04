'''
Multiply the number

Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)

Will the argument passed into the function's parameter always be a number?
Will the return always be a number?

print(multiply(10),250);
print(multiply(5),25);
print(multiply(200),25000);
print(multiply(0),0);
print(multiply(-2),-10);

multiply number by 5 to the power of the number of digits that number has
'''

def multiply(n):
    return n * 5 ** len(str(abs(n)))