function removeLastChar(string){
  console.log(string.slice(0, (string.length - 1)));
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'