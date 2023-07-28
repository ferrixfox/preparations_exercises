let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

//let obj = {};
//nestedArray.forEach(function(array){
//  obj[array[0]] = array[1];
//});

let obj = Object.fromEntries(nestedArray);

console.log(obj);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }