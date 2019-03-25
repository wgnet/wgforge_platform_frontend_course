/*
Implement a functuion which receives an array and another function
and apply passed function to each elemnt of array

Example:
[1, 2, 3], x => x + 1  yields [2, 3 ,4]
*/
export function map(array, func) {
  let resultArray=[];
  let index = 0;
  array.forEach(element => {
    resultArray.push(func(element, index, array));
    index++;
  });
   return resultArray;

}

/*
Write a function which revices a function and array and
returns new array with elements matched to filter

['foo', 1, null, 'bar'], x => typeof x === 'string' yields ['foo', bar]

[1, 2, 3, 4, 5, 6], x => x % 2 == 0 yields [2, 4, 6]

*/
export function filter(array, fn) {
  let resultArray=[];
  let index = 0;
  array.forEach(element => {
    if(fn(element, index, array)){
      resultArray.push(element);
    }
    index++;
  });
  return resultArray;
}

/*
Implement a function that returns a function which yields a fibonaccy number

Example:
const gen = fibGenerator()
gen() -> 0
gen() -> 1
gen() -> 1
gen() -> 2
gen() -> 3
gen() -> 5
...
*/
export function fibGenerator() {
  let i = 0;
  let fib = new Array(1);
  return function getFibNumber(){
    i === 0? fib.fill(0) : i === 1? fib[i] = 1:fib[i] = fib[i-1] + fib[i-2];
    i++;
    return fib[i-1];
  };
}

/*
Write a function that recieves a function and other
arguments and return a function with bounded arguments

Examples:
const sum = (x, y) => x + y
const addOne = partial(sum, 1)
addOne(2) -> 3
const sumTwoAndFour = partial(sum, 2, 4)
sumTwoAndFour() // 6

Note: function has a length property which shows how many arguments it receives
*/
export function partial(fn, ...args) {
  return fn.bind(undefined, ...args);
}
