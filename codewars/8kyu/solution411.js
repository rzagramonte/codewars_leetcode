/*
Job Matching #1

Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

Let's give this a try. We'll create a function match (job_matching in Python) which takes a candidate and a job, which will return a Boolean indicating whether the job is a valid match for the candidate.

A candidate will have a minimum salary, so it will look like this:

let candidate = {
  minSalary: 120000
}
A job will have a maximum salary, so it will look like this:

let job = {
  maxSalary: 140000
}
If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.

Will the arguments passed into the function always be two objects?
Will the return always be either true, false, or a thrown error?

let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 };
    
console.log(match(candidate1, job1), true);
console.log(match(candidate1, job2), false);

TODO:
throw error if either property does not exist
return true or false if the max salary is greater than or equal to the candidates min salary with a 10% deduction for wiggle room
*/

const match = (candidate, job) => {
    if(!candidate.minSalary || !job.maxSalary) throw new Error("Missing salary information");
    return job.maxSalary >= candidate.minSalary - (candidate.minSalary * 0.10);
  };