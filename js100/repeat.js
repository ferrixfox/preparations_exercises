function repeat(num, string){
  let timesRepeated = 0;
  let newString = "";
  while (timesRepeated < num){
    newString = newString.concat(string);
    timesRepeated ++;
  }
  console.log(newString);
}

repeat(3, 'ha');