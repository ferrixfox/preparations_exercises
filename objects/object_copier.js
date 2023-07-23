function objCopier(obj, copy){
  for(let key in obj){
    copy[key] = obj[key];
  }
  return copy;
}

let obj = {
  name : 'Fox',
  age: 37,
  favorite_food : 'Pizza',
}

console.log(objCopier(obj, {}));