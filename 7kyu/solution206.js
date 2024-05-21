/*
Make Me Slow
Make me slow! Calling makeMeSlow() should take at least 7 seconds.

Will there be no input?
Will the function always take at least 7 seconds to complete?

estimate using the relationship between smaller loops and desired execution time:

Run a small loop and measure its time.
Calculate the number of iterations for the desired time.
If 100 million iterations take 0.127 seconds, 1 billion (10 times more) iterations would take approximately 1.27 seconds.
Therefore, for about 7 seconds:
7 seconds / 1.27 seconds ≈ 5.5
7 seconds/1.27 seconds≈5.5
Thus, you need roughly 5.5 times more iterations of 1 billion:
5.5 × 1,000,000,000 = 5,500,000,000
*/

function makeMeSlow() {
    // This function is too fast!
    for (let x = 0; x < 5500000000; ++x) { }
  }