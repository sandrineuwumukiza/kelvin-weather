const userName = 'sandrine';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')
const userQuestion = 'what do you do?';
console.log(`Hello,${userName}!! ${userQuestion}`);
const randomNumber = Math.floor(Math.random() *8)
console.log(randomNumber)
let eightBall = '';

if(randomNumber === 0) {
    console.log(eightBall = 'It is certain');
}
else if(randomNumber === 1 ){
    console.log(eightBall = 'It is decidedly so');
}
else if(randomNumber === 2 ){
    console.log(eightBall = 'Reply hazy try again');
}
else if(randomNumber === 3 ){
    console.log(eightBall = 'Cannot predict now');
}
else if(randomNumber === 4 ){
    console.log(eightBall = 'Do not count on it');
}
else if(randomNumber === 5 ){
   console.log(eightBall = 'My sources say no');
}
else if(randomNumber === 6 ){
   console.log(eightBall = 'Outlook not so good');
}
else{
  console.log(eightBall = 'Signs point to yes') 
}

// extra practice using switch statement

switch(randomNumber){
    case 0:
        console.log(eightBall = 'It is certain');
        break;

    case 1:
        console.log(eightBall = 'It is decidedly so');
        break;    

    case 2:
        console.log(eightBall = 'Reply hazy try again');
        break;
        
    case 3:
        console.log(eightBall = 'Cannot predict now');
        break;

    case 4:
        console.log(eightBall = 'Do not count on it');
        break;

    case 5:
        console.log(eightBall = 'My sources say no');
        break;

    case 6:    
         console.log(eightBall = 'Outlook not so good');
         break;

    default:
        console.log(eightBall = 'Signs point to yes')  
            


}