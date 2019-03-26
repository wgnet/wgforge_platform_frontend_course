/*
collect array's element to object with first letters as keys
and sorted words array as a value

Example:
['test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'] -> {
  't': ['test', 'trust'],
  'f': ['farm', 'foo'],
  'b': ['bar'],
  'h': ['ham', 'harm'],
}
*/
export function collectByFirstLetter(...words) {
  const obj = {};
  words.forEach(word => {
    let firstLetter = word.slice(0,1);
    if (obj[firstLetter] == undefined) {
      obj[firstLetter] = [];
      obj[firstLetter].push(word);
    } else {
      obj[firstLetter].push(word);
    }
  });
  for (let letter in obj) {
    obj[letter].sort();
  }
  return obj;
}

/*
Write a function which receives object and list of keys
and returns object with only keys passed in arguments.
unknown keys are ignored

Example:
({name: 'John', age: 42}, 'name') yields {name: 'John'}
*/
export function only(obj, ...keys) {
  const received = {};
  keys.forEach( key => {
    if (obj[key] !== undefined) {
      received[key] = obj[key];
    }
  });
  return received;
}

/*
Function counts words in given text.
returns an object with word as key and it's frequence as value

Note: It should ignore punctuation marks and uppercase symbols

Example:
'Awesome! Does it work? It should works' yields
{
  awesome: 1,
  test: 1,
  it: 2,
  should: 1,
  works: 1,
}
'' yields {}
*/
export function wordsCount(text) {
  const obj = {};
  if (text === '') return obj;
  let words = text.split(' ').map(word => word.toLowerCase().replace(/\W/g, ''));
  words.forEach(word => {
    if (obj[word] === undefined) {
      obj[word] = 1;
    } else {
      obj[word] += 1;
    }
  });
  return obj;
}

/*
Write a function's body which create an object for user representation
It should contains method for password validation:
password is weak if it contains only lowercase letters or only uppercase

Example:
const user = createUser('root', 'topsecret')
user.login === 'root' // true
user.password === 'topsecret' // true
user.isWeakPassword() === true
user.password = 'topSecreT'
user.isWeakPassword() === false
*/

export function createUser(login, password) {
  return {
    login: login,
    password: password,
    isWeakPassword: function () {
      return (this.password === this.password.toLowerCase() ||
         this.password === this.password.toUpperCase()) ||
         false;
    }
  }
}
