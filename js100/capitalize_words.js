let string = "launch school tech & talk".split(" ");
let capitalized = "";

string.forEach(function(word){
  capitalized += word.charAt(0).toUpperCase() + word.slice(1) + " ";
});

console.log(capitalized);
