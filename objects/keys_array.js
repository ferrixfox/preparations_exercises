let obj = {
  b: 2,
  a: 1,
  c: 3,
};

array = Object.keys(obj);
let uppers = array.map(key => key.toUpperCase());
console.log(uppers);