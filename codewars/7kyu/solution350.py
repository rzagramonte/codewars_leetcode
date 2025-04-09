'''
Retrieve array value by index with default

Complete the solution. It should try to retrieve the value of the array at the index provided. If the index is out of the array's max bounds then it should return the default value instead.

Example:

data = ['a', 'b', 'c']
solution(data, 1, 'd') # should == 'b'
solution(data, 5, 'd') # should == 'd'

# negative values work as long as they aren't out of the length bounds
solution(data, -1, 'd') # should == 'c'
solution(data, -5, 'd') # should == 'd'

Will the arguments passed into the function always be a list, a number, and a third value of any data type?
Will the return always be one value of any data type?


rng = list(range(1, 4))
print(solution(rng, 1, 'a'), 2)
print(solution(rng, -1, 'a'), 3)
print(solution(rng, -5, 'a'), 'a')
print(solution(rng, -3, 'a'), 1)

rng = list(range(1, 6))
print(solution(range(1,6), 10, 'a'), 'a')
print(solution([None, None], 0, 'a'), None)

if index is in the range, return the item at the index
else return the default value
'''


def solution(items, index, default_value):
    if -len(items) <= index < len(items):
        return items[index]
    else:
        return default_value