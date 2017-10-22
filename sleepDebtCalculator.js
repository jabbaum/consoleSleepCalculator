const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  }
};
const getActualSleepHours = () => getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours*7;
};
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  switch (true) {
    case actualSleepHours === idealSleepHours:
      console.log("You got the perfect amount of sleep! You have no sleep debt.");
      break;
    case actualSleepHours <= idealSleepHours:
      console.log(`You should get more sleep. You are ${idealSleepHours-actualSleepHours} hour(s) under your ideal amount of sleep.`);
      break;
    case actualSleepHours >= idealSleepHours:
      console.log(`You are well rested! You are ${actualSleepHours-idealSleepHours} hour(s) over your sleep goal!`);
  }
};
calculateSleepDebt();
