// GENERATING SECRET MESSAGE

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get',
 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can',
  'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
  console.log(secretMessage.length);
//   push() method will helps us to add those two stringspassed in it
  secretMessage.push('to', ' Program');
//   this line will assign index  TO the give string
  secretMessage[7] = 'newWord';
//   .shift?() method will remove the index at 0
  secretMessage.shift();
//   unshift() method will add the string at the first index or beginning of array
secretMessage.unshift('Programming');
//   splice will remove specified elements from the array
secretMessage.splice(6,5, 'know,');
//   console.log(secretMessage);
  console.log(secretMessage.join(' '));