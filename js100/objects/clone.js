function clone(obj){
  let copy = {};
  for (let prop in obj){
    copy[prop] = obj[prop];
  }
  return copy;
}

let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

let cloned = clone(obj);

obj.array[0] = 3;
console.log(obj);
console.log(cloned);