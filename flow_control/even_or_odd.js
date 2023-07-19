function evenOrOdd (num){
  if((num % 2) === 0) console.log('even')
  else console.log('odd');
}

let rlSync = require('readline-sync');

let num = rlSync.question('enter a number: ')
evenOrOdd(num);