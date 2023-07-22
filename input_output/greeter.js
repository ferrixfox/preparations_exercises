let rlSync = require('readline-sync');

function getName(userName){
  return rlSync.question(`What is your ${userName} name?\n`);
}

let firstName = getName('first');
let lastName = getName('last');
console.log(`Hello, ${firstName} ${lastName}!`);