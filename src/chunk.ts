export function chunk(collection: unknown[], size: number) {
  let res: unknown[][] = [];
  if (typeof size === 'string') {
    size = Number.parseInt(size);
  }
  if (size < 0) {
    size = Math.abs(size);
  }
  let subArray: unknown[] = [];
  let counter = 0;
  collection.forEach(x => {
    if (counter < size) { 
      subArray.push(x);
    }
    counter++;
    if (counter === size || collection.indexOf(x) === collection.length - 1) {
      res.push(subArray);
      counter = 0;
      subArray = [];
    }
  });
  return res;
}

// Текущая функция - https://lodash.com/docs/4.17.15#chunk
// Для стрима - пытаюсь реализовать все функции из библиотеки Lodash. Цель - попрактиковаться.
// На каждую функцию также пишу тест (беру из оригинальной библиотки) - так интереснее.
// Приветствуется совместное программирование - если у вас есть идея, как сделать что-то,
// можете прислать свой вариант кода в чат ссылкой на pastebin или что-то в этом духе, чтобы я мог скопировать код.

// Пример работы:
// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
