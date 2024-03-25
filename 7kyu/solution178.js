/*
Holiday II - Plane Seating

Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.

Will the argument passed into the function's parameter always be a string?
Will the string either be 2 or 3 characters?
Will the return always be a string?

console.log(planeSeat('2B'), 'Front-Left');
console.log(planeSeat('20B'), 'Front-Left');
console.log(planeSeat('58I'), 'No Seat!!');
*/

const planeSeat = a => {
    let l = a.slice(-1);
    let n = a.length == 2 ? +a[0] : +(a[0] + a[1]);
  
    if(/[A-C]/.test(l) && (n > 0 && n < 21 )){
      return 'Front-Left';
    }else if(/[A-C]/.test(l) && (n > 20 && n < 41)){
      return 'Middle-Left';
    }else if(/[A-C]/.test(l) && (n > 39 && n < 61)){
      return 'Back-Left';
    }else if(/[D-F]/.test(l) && (n > 0 && n < 21 )){
      return 'Front-Middle';
    }else if(/[D-F]/.test(l) && (n > 20 && n < 41)){
      return 'Middle-Middle';
    }else if(/[D-F]/.test(l) && (n > 39 && n < 61)){
      return 'Back-Middle';
    }else if(/[GHK]/.test(l) && (n > 0 && n < 21 )){
      return 'Front-Right';
    }else if(/[GHK]/.test(l) && (n > 20 && n < 41)){
      return 'Middle-Right';
    }else if(/[GHK]/.test(l) && (n > 39 && n < 61)){
      return 'Back-Right';
    }else{
      return 'No Seat!!';
    };
  };