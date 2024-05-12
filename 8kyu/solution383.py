'''
Count the Monkeys!

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]

Will the parameter always be a number?
Will the return always be an array?
Will the elements of the returned array always be numbers?

print(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(monkeyCount(1), [1])
print(monkey_count(5), [1, 2, 3, 4, 5])
print(monkey_count(3), [1, 2, 3])
print(monkey_count(9), [1, 2, 3, 4, 5, 6, 7, 8, 9])
print(monkey_count(20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

create new list with n as the length
iterate over list adding 1 to index of each slot
'''

monkey_count = lambda n: [x+1 for x in range(n)]