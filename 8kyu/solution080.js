/*
Man in the west
A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

P.R.E.P.
parameters: an array
return: boolean of true or false
examples:
["stone","stone","stone","stone","stone","gold"] => true
["stone","stone","stone","stone"] => false
pseudocode:
declare function
set parameter
return bucket appended to includes('gold')
*/

function checkTheBucket(bucket){
    //your code here
    return bucket.includes('gold');
  }