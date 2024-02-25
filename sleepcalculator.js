// Step 1: Define function to get sleep hours for a given day
const getSleepHours = day => {
  switch(day.toLowerCase()) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 8;
    case 'friday':
      return 5;
    case 'saturday':
      return 10;
    case 'sunday':
      return 11;
    default:
      return 0; // Return 0 for invalid input
  }
};

// Step 2: Get actual sleep hours for the week
const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +
  getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +
  getSleepHours('sunday');

// Step 3: Get ideal sleep hours for the week
const getIdealSleepHours = () => {
  const idealHoursPerNight = 8; // Ideal hours per night
  return idealHoursPerNight * 7; // Total ideal hours for the week
};

// Step 4: Calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed by ${actualSleepHours - idealSleepHours} hours.`);
  } else {
    console.log(`You should get some rest. You are ${idealSleepHours - actualSleepHours} hours short of your ideal sleep.`);
  }
};

// Step 5: Call calculateSleepDebt to start the program
calculateSleepDebt();
