'''
How good are you really?

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

Will the parameters always be a list of numbers and a number?
Will the return always be a boolean of either true or false?

print(better_than_average([2, 3], 5), True)
print(better_than_average([100, 40, 34, 57, 29, 72, 57, 88], 75), True)
print(better_than_average([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), True)
print(better_than_average([41, 75, 72, 56, 80, 82, 81, 33], 50), False)
'''
#add your_points to class_points
# set total to 0
# loop over class_points, adding said point to total and reassigning it
# return true or false if your_points is greater than the average points
def better_than_average(class_points, your_points):
    # Your code here
    class_points.append(your_points)
    total = 0
    for point in class_points:
        total += point
    return your_points > (total / len(class_points))