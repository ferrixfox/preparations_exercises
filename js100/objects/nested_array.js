let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let outerArray = []

for (let prop in person){
  let innerArray = [];
  innerArray[prop] = person[prop];
  outerArray.push(innerArray);
}

console.log(outerArray);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]