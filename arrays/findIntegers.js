function findInteger(array){
  console.log(array.filter(element => Number.isInteger(element)));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

findInteger(things);
