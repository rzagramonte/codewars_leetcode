/*
ReOrdering

There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering

Will the parameter always be a string?
Will the return always be a string?

console.log(reOrdering('ming Yao'), 'Yao ming');
console.log(reOrdering('Mano donowana'), 'Mano donowana');
console.log(reOrdering('wario LoBan hello'), 'LoBan wario hello');
console.log(reOrdering('bull color pig Patrick'), 'Patrick bull color pig');
console.log(reOrdering('jojo ddjajdiojdwo ana G nnibiial'), 'G jojo ddjajdiojdwo ana nnibiial');
console.log(reOrdering('is one of those rare names that s both exotic and simple Adira'),'Adira is one of those rare names that s both exotic and simple');
console.log(reOrdering('is an older name than annabel Amabel and a lot more distinctive'),'Amabel is an older name than annabel and a lot more distinctive');
console.log(reOrdering('JoJo'), 'JoJo');
console.log(reOrdering('a b c d e f g h i j k l m n o p q r s t u v w x y Z'), 'Z a b c d e f g h i j k l m n o p q r s t u v w x y');
console.log(reOrdering('a b c d e f g h i j k l m N o p q r s t u v w x y z'), 'N a b c d e f g h i j k l m o p q r s t u v w x y z');
*/

//declare constant variable reOrdering which will be assigned to an arrow function
//set parameter text
//if text doesn't include a space, return text
//reassign text to an array of the words
//declare caps
//for each element in text, if the first letter is caps, assign it to caps the variable
//delete this element from the array
//return caps with text as a string
const reOrdering = text => {
    //your code here
    if(!text.includes(' ')) return text;
    text=text.split(' ');
    let caps;
    text.forEach((e,i)=>{
      if(e[0] == e[0].toUpperCase()){
        caps = e;
        text.splice(i,1);
      }
    });
    return `${caps} ${text.join(' ')}`;
  };