'''
Find out whether the shape is a cube

To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer

Will the parameter always be two numbers?
Will the return always be a boolean of either True or False?

print(cube_checker(-12,2), False)
print(cube_checker(8, 2),  True)
print(cube_checker(125,-5),False)
'''

#return false if volume is less than or equal to 0 or side is less than or equal to 0 else return true or false if side^3 is equal in value to volume
def cube_checker(volume, side):
    return False if volume <= 0 or side <= 0 else side ** 3 == volume