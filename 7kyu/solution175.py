"""
Can I play right now?

As a strict big brother, I do limit my young brother Vasya on time he spends on computer games. I define a prime-time as a time period till which Vasya have a permission to play computer games. I specify start hour and end hour as pair of integers.

I need a function which will take three numbers - a present moment (current hour), a start hour of allowed time period and an end hour of allowed time period. The function should give answer to a question (as a boolean): "Can Vasya play in specified time?"

If I say that prime-time is from 12 till 15 that means that at 12:00 it's OK to play computer but at 15:00 there should be no more games.

I will allow Vasya to play at least one hour a day.

Will the arguments passed into the function's parameters always be three numbers?
Will the numbers always be whole numbers?
Will the return always be a boolean of True or False?

print(can_i_play(12, 10, 14), True, "12:00 should match to 10:00-14:00 prime-time"))
print(can_i_play(12, 13, 14), False, "12:00 shouldn't match to 13:00-14:00 prime-time"))
print(can_i_play(15, 12, 15), False, "15:00 shouldn't match to 12:00-15:00 prime-time"))
print(can_i_play(23, 22, 1), True, "23:00 should match to 22:00-01:00 prime-time"))
"""


def can_i_play(now_hour, start_hour, end_hour):
    if start_hour > end_hour:
        return now_hour >= start_hour or now_hour < end_hour
    elif start_hour < end_hour:
        return now_hour >= start_hour and now_hour < end_hour
    else:
        return now_hour == start_hour