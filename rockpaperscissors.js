// Rock,Paper,Scissors

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

if(userInput === 'rock' || userInput === 'Paper' || userInput === 'scissor'){
    return userInput;
}
else{
    console.log('Please select a choice')
}
};
// console.log(getUserChoice('Rocket'))

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0: 
        return 'rock';
        break;

    case 1: 
        return 'Paper';
        break;
    
   case 2: 
        return 'Scissor';
        break; 
    }
}
console.log(getComputerChoice());

function determineWinner1(userChoice, computerChoice){
    Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
          return 'rock';
          break;
        case 1:
          return 'paper';
          break;
        case 2:
            return 'scissor';
            break; 

}
}
console.log(getComputerChoice());

const determineWinner = function(userChoice, computerChoice){

  if (userChoice === computerChoice){
    return 'The game is a tie!';
  }
    
    else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      else if(userChoice === 'scissor') {
        if(computerChoice === 'paper') {
          console.log('The computer won!');
      }
      else{
        return 'You won!!!'
      }
    }
    else if(userChoice === 'paper'){
      if(computerChoice === 'rock') {
        console.log('The computer won!');
    }
    else{
      return 'You won!!!'
    }
  }
    }
console.log(determineWinner('rock', 'scissors')); 
console.log(determineWinner('paper', 'paper'));  
console.log(determineWinner('paper', 'rock'))

function playGame(){
  let userChoice = getUserChoice('scissors');
  let computerChoice = getComputerChoice()
  console.log('your choice is' + userChoice)
  console.log('your computer is '+ computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}
playGame()