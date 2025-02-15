'''
Greek Sort

Write a comparator for a list of phonetic words for the letters of the greek alphabet.

A comparator is:

a custom comparison function of two arguments (iterable elements) which should return a negative, zero or positive number depending on whether the first argument is considered smaller than, equal to, or larger than the second argument

(source: https://docs.python.org/2/library/functions.html#sorted)

The greek alphabet is preloded for you as greek_alphabet:

greek_alphabet = (
    'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 
    'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 
    'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma',
    'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega')
Examples
greek_comparator('alpha', 'beta')   <  0
greek_comparator('psi', 'psi')      == 0
greek_comparator('upsilon', 'rho')  >  0

import codewars_test as test
from solution import greek_comparator
from preloaded import greek_alphabet

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(greek_comparator('alpha', 'beta') < 0, True, "result should be negative")
        test.assert_equals(greek_comparator('chi', 'chi')==0, True, "result should be zero")
        test.assert_equals(greek_comparator('upsilon', 'rho')>0, True, "result should be positive")
'''

def greek_comparator(lhs, rhs):
    # the tuple greek_alphabet is defined in the global namespace
    return greek_alphabet.index(lhs) - greek_alphabet.index(rhs)