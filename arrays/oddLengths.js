function oddLengths(array){
  let lengths = array.map(element => element.length);
  return lengths.filter(element => (element % 2) != 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));