function factorial(num){
  for(let i = (num - 1); i > 0; i--){
    num = num * i;
  }
  console.log(num)
}

let rlSync = require("readline-sync");
let num = Number(rlSync.question("Enter a number: "));

factorial(num);