/*
write a function's body that concat all passed strings to one and returns it
*/
export function concat(...strings) {
  return strings.reduce((acc, string) => acc + string, "");
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
  return string.split('').filter((letter, i) => i % 2 == 0).join('');
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
  return (string == '') ? 0 : string.split(' ').length;
}
