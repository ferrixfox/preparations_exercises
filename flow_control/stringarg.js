function allCaps(string){
  if(string.length >= 10) console.log(string.toUpperCase()); 
  else console.log(string);
}

let rlSync = require("readline-sync");

let string = rlSync.question('Please enter a string \n');
allCaps(string);