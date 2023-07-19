function evenOrOdd (num){
  if((num % 2) === 0) console.log('even')
  else console.log('odd');
}

let rlSync = require('readline-sync');

let num = Number(rlSync.question('enter a number: '));
if (isNaN(num)) console.log(`Error: ${num} is not a number`);
else evenOrOdd(num);