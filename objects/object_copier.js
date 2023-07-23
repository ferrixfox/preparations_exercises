function objCopier(obj, keys = Object.keys(obj)){
  let copy = {}
  for(let key in obj){
    if(keys.includes(key)){
      copy[key] = obj[key];
    }
  }
  return copy;
}

let obj = {
  name : 'Fox',
  age: 37,
  favorite_food : 'Pizza',
}

let copy = objCopier(obj)
console.log(copy);