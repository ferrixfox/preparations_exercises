function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet(){
  return greeting() + ", " + recipient() + '!';
}

console.log(greet());