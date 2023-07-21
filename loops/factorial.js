let rlSync = require("readline-sync");

let num = Number(rlSync.question("Enter a number: "));

for(let i = (num - 1); i > 0; i--){
  num = num * i;
}

console.log(num);