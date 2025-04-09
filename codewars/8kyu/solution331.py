'''
Cat years, Dog years

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

Will the parameter always be a number greater than or equal to 1?
Will the return always be an array of three numbers?

print(human_years_cat_years_dog_years(1), [1,15,15])
print(human_years_cat_years_dog_years(2), [2,24,24])
print(human_years_cat_years_dog_years(10), [10,56,64])
'''
# return array with three elements as numbers
# first number is human years
# second number is cat years: if human years is equal to 1 return 15, if 2 return 24, else return human years minus 2 times 4 plus 24 for the first 2 years
# third number is cat years: if human years is equal to 1 return 15, if 2 return 24, else return human years minus 2 times 5 plus 24 for the first 2 years

def human_years_cat_years_dog_years(human_years):
    # Your code here
    return [human_years,15 if human_years == 1 else 24 if human_years == 2 else (human_years - 2) * 4 + 24,15 if human_years == 1 else 24 if human_years == 2 else (human_years - 2) * 5 + 24]