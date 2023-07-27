function isBlank(string){
  let newString = string.trim();
  return(newString.length === 0);
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true