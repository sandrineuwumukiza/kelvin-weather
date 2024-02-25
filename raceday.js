let raceNumber = Math.floor(Math.random() * 1000);
let registereEarly = false;
const age = 17;

if(age > 18 && registereEarly ){
raceNumber += 1000;
console.log(`Early adults run at 9:30 am,race number:${raceNumber}`);
}
else if(age > 18 && !registereEarly ){
  
    console.log(`Late adults run at 11:00 am,race number:${raceNumber}`);
    }
    else if(age < 18){
        console.log(`Youth registrants run at 12:30 pm,race number:${raceNumber}`);
    }
    else if(age === 18){
        console.log(`please look for registration desk`)
    }