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
  let obj = {};
  words.forEach((e) => {
    if (obj[e[0]] == undefined) {
      obj[e[0]] = [];
      obj[e[0]].push(e);
    } else {
      obj[e[0]].push(e);
    }
  });
  for (let firstLetter in obj) {
    obj[firstLetter].sort();
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
  let newObj = {};
  keys.forEach((e) => {
    if (obj[e] !== undefined) {
      newObj[e] = obj[e];
    }
  });
  return newObj;
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
  let obj = {}, arr;
  if (text.length > 0) {
    arr = text.split(' ');
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i].toLowerCase().replace(/[^A-Za-z]+/g, '');
      if (obj[word]) {
        obj[word]++;
      } else {
        obj[word] = 1;
      }
    }
    return obj;
  } else return obj;
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
  return new function() {
    this.login = login;
    this.password = password;
    this.isWeakPassword = () => {
      return (
        this.password === this.password.toUpperCase() || this.password === this.password.toLowerCase()
      );
    };
  }();
}
