/**
 * Задача 1: написать функцию smoosh, которая принимает массив, "выравнивает" вложенные массивы
 * в одноуровневый массив и возвращает новый плоский массив.
 * Например:
 * smoosh([1, 2, [3, 4], 5])
 * > [1, 2, 3, 4, 5]
 * Входной массив может содержать массивы любого уровня вложенности.
 * Например: [[1, 2], [3, [4, [5]]]]
 *
 * Задача 2: написать функцию squeeze (по аналогии со smoosh) таким образом,
 * чтобы она модифицировала исходный массив, а не возвращала новый.
 *
 * Задача 3*: для функций smoosh и squeeze добавить валидацию входного параметра.
 * В случае, если на вход передан не массив функция должна выбросить исключение
 * с сообщением 'argument should be an array'.
 */
function smoosh(arr) {
  if (!(arr instanceof Array)) {
    throw {message: 'argument should be an array'};
  }
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(smoosh(val)) : acc.concat(val), [])
}

function squeeze(arr) {
  let smooshArr = smoosh(arr);
  arr.length = 0;

  smooshArr.forEach(e => {
    arr.push(e);
  });
  return arr;
}

export {smoosh, squeeze};
