function allMatches(words, regex){
  let matches = []
  words.forEach(function(word){
    if(/(lab)/.test(word)){
      matches.push(word);
    }
  })
  return matches;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']