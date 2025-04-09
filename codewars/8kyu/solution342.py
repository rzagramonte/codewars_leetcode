'''
Hello, Name or World!

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"

Will the parameter either be a string or default to None?
Will the return always be a string?

print(hello("John"), "Hello, John!")
print(hello("aLIce"), "Hello, Alice!")
print(hello(""), "Hello, World!")
'''

# set name to default to None
# return string without name if name is falsy else return string with name where first letter is caps and rest is lowercase
def hello(name=None):
    return "Hello, World!" if not name else f"Hello, {name[0].upper()}{name[1:].lower()}!"