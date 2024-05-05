'''
Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

Will the argument passed into function's parameter always be a string?
Will the return always be a string?

print(solution('world'), 'dlrow')
print(solution('hello'), 'olleh')
print(solution(solution(''), '')
print(solution(solution('h'), 'h')
'''

#return reversed input string
solution = lambda string: string[::-1]