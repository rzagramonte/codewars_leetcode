'''
Fix your code before the garden dies!

You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!

Will the parameter always be a number?
Will the return always be a string?

print(rain_amount(100), "Your plant has had more than enough water for today!")
print(rain_amount(40), "Your plant has had more than enough water for today!")
print(rain_amount(39), "You need to give your plant 1mm of water")
print(rain_amount(5), "You need to give your plant 35mm of water"))
print(rain_amount(0), "You need to give your plant 40mm of water")
'''

#if mm is less than 40, minus mm from 40 and interpolate it into the returned string
#else return the alternating string
def rain_amount(mm):
    if (mm < 40):
         return f"You need to give your plant {40 - mm}mm of water"
    else:
         return "Your plant has had more than enough water for today!"