function contains(place, array){
  for(let i = 0; i < array.length; i++){
    if (array[i] === place) return true;
  };
  return false;
}


let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

console.log(contains('Barcelona', destinations));