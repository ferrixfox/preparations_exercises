//exercise 1
let firstName = 'Lauren ';
let lastName = 'Wagner';
let fullName = firstName + lastName;
console.log(fullName)

//exercise 2
let num = 4936;

let one = num % 10;
num = num - one;
let ten = (num % 100) / 10;
num = num - (ten * 10);
let hundred = (num % 1000) / 100;;
num = num - (hundred * 100);
let thousand = (num % 10000) / 1000; 
//don't have to use the % operator for thousands
console.log(thousand, hundred, ten, one);

//exercise 4, use explicit instead of implicit coercion
let val = Number('5') + 10;
console.log(val);

//exercise 6
console.log(`The value of 5 + 10 is ${val}`);

//exercise 8
let names = [
  'asta', 
  'butterscotch', 
  'pudding', 
  'neptune', 
  'darwin',
];

//exercise 9
let pets = {
  'asta' : 'dog',
  'butterscotch' : 'cat',
  'pudding' : 'cat',
  'neptune' : 'fish',
  'darwin' : 'lizard'
}