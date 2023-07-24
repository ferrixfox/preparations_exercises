// write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

function isNotANumber(value){
  string = Number(value);
  string = string.toString();
  console.log(string);
  nanString = 'NaN';
  for(let i = 0; i < string.length; i++){
    if(string[i] === nanString [i]) continue;
    else return(false);
  }
  return true
}

console.log(isNotANumber(8));
console.log(isNotANumber('ten'));