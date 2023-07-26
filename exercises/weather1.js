let rlSync = require('readline-sync');

let weather = rlSync.question("What's the weather?\n");

switch(weather){
  case 'sunny': 
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log("Grab your umbrella!");
    break;
  case 'hot':
    console.log("Let's go to the pool!");
    break;
  case 'snowy':
    console.log('SNOW DAY!');
    break;
  default:
    console.log("Let's stay inside");
    break;
}