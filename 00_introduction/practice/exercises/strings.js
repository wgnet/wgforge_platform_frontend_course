/*
write a function's body that concat all passed strings to one and returns it
*/
export function concat(...strings) {
  let word = '';
  strings.forEach((e) => {
    word += e;
  });
  return word;
}

/*
write a function's body that returns string
that contains element of initial strings with odd indexes

Example:
'abcd' -> 'ac'
'' -> ''
'test' -> 'ts'
*/
export function oddElements(string) {
  let word = '';
  string.split('').filter((e, i) => {
    if (i % 2 == 0) {
      word += e;
    }
  });
  return word;
}

/*
write a function's body that returns words count in passed string

Example:
'abcd' -> 1
'' -> 0
'foo bar' -> 2

Note: String has .split(separator) method where seprator is another string
*/
export function wordsCount(string) {
  if (string.length > 0) {
    return string.split(' ').length;
  } else {
    return 0;
  }
}
