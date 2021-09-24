export function chunk(collection, size) {
  let res = [];
  let subArray = [];
  let counter = 0;
  for (let i = 0; i <= collection.length; i++) {
    if (counter < size) {
      subArray.unshift(collection.shift());
    }
    counter++;
    if (counter === size) {
      res.unshift(subArray);
    }
  }
  return res;
}

console.log(chunk(["a", "b", "c", "d"], 2));
// => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
