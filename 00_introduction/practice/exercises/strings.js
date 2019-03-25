/*
write a function's body that concat all passed strings to one and returns it
*/
export function concat(...strings) {
  let resultString='';
  for (let i=0 ; i<arguments.length; i++) {
    resultString += arguments[i];
  }
  return(resultString);
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
  let stringWithOddLetters = '';
  for(let i = 0; i < string.length; i = i + 2){
    stringWithOddLetters += string[i];
  }
  return stringWithOddLetters;
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
  return string.length ? string.split(' ').length : 0;
}
