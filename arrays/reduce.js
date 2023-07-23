
function oddLengths(array){
  return array.reduce((newArr, element) => {
    let length = element.length;
    if((length % 2) != 0){
     newArr.push(length);
    }
    return newArr;
  }, []); 
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));