function compareByLength(first, second){
  if(first.length < second.length) console.log(-1);
  else if(first.length === second.length) console.log(0);
  else console.log(1);
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0