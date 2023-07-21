function factorial(num){
  if (num < 2){
    return num;
  }
  return(num * factorial(num - 1));
}


let rlSync = require("readline-sync");
let num = Number(rlSync.question("Enter a number: "));

console.log(factorial(num));