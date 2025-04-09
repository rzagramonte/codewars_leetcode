'''
The 'if' function

Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

Example:
def truthy(): 
  print("True")
  
def falsey(): 
  print("False")
  
_if(True, truthy, falsey)
# prints 'True' to the console

Will the parameters always be a boolean of true or false, and two functions which do not take any parameters?
Will the return always be the return of either function?

print(_if(true), func1())
print(_if(false), func2())
'''

# return func1() if bool is truthy, else return func2
def _if(bool, func1, func2):
    return func1() if bool else func2()