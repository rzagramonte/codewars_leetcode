/*
Whose bicycle?

I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you. You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.
'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.
'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. Use the ageTable object which is preloaded:

ageTable = {
  firstSonAge: 14,
  secondSonAge: 9,
  thirdSonAge: 8,
};

Will the arguments passed into the function always be three objects?
Will the return always be a string?

console.log(
  whoseBicycle(
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 8,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 6,
      history: 5,
      physics: 5,
      geography: 9,
      chemistry: 10,
    }
  ),
  "I need to buy a bicycle for my second son."
);

console.log(
  whoseBicycle(
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    }
  ),
  "I need to buy a bicycle for my third son."
);

console.log(
  whoseBicycle(
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 5,
    },
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    }
  ),
  "I need to buy a bicycle for my third son."
);

console.log(
  whoseBicycle(
    {
      algebra: 3,
      history: 7,
      physics: 8,
      geography: 4,
      chemistry: 10,
    },
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 4,
    },
    {
      algebra: 9,
      history: 7,
      physics: 9,
      geography: 9,
      chemistry: 10,
    }
  ),
  "I need to buy a bicycle for my third son."
);

TODO:
return correct string based on which set of scores are the highest
*/

const whoseBicycle = (diary1, diary2, diary3) => {
  [diary1, diary2, diary3] = [diary1, diary2, diary3].map((e) => Object.values(e).reduce((a, c) => a + c, 0));

  const dups = [...new Set([diary1, diary2, diary3])];
  const max = Math.max(...dups);

  const first = "I need to buy a bicycle for my first son.";
  const second = "I need to buy a bicycle for my second son.";
  const third = "I need to buy a bicycle for my third son.";

  if (dups.length == 1) return third;

  if (dups.length == 2) {
    if (max == diary1 && diary1 == diary2) return second;
    if (max == diary2 && diary2 == diary3) return third;
    if (max == diary3) return third;
  }

  if (dups.length == 3) {
    if (max == diary1) return first;
    if (max == diary2) return second;
    if (max == diary3) return third;
  }

  return max == diary1 ? first : max == diary2 ? second : third;
};


