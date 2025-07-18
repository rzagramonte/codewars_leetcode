'''
Color Ghost

Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = Ghost()
ghost.color  #=> "white" or "yellow" or "purple" or "red"

no arguments are being passed in
returns a string

import codewars_test as test
from solution import *

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        ghosts = [Ghost().color for _ in range(100)]
        test.expect(ghosts.count("white") >= 1)
        test.expect(ghosts.count("yellow") >= 1)
        test.expect(ghosts.count("purple") >= 1)
        test.expect(ghosts.count("red") >= 1)

TODO:
import random
create color property set to random choice of strings
'''

import random

class Ghost(object):
    def __init__(self):
        self.color = random.choice(["white", "yellow", "purple", "red"])