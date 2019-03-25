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
  let firstLetterArray = new Array(0);

  words.forEach(word => {
    firstLetterArray.push(word[0]);
  });
  let obj = {};
  firstLetterArray.forEach( letter => {
    obj[letter] = true;
  });
   firstLetterArray = Object.keys(obj);
   obj = {};
   firstLetterArray.forEach(letter =>{
     obj[`'${letter}'`] = getWordByLetter(letter);
   });

  function getWordByLetter(letter){
     let wordsArray = new Array(0);
     words.forEach(word => {
       if (word[0] === letter){
         wordsArray.push(`'${word}'`);
       }
     });
     wordsArray.sort((word1, word2) => word1.localeCompare(word2));
     return wordsArray;
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
  const currentObj = {};
  if(keys){
    keys.forEach(key => {
      if(obj[key] !== undefined){
        currentObj[key] = obj[key];
      }
    });
  }

  return currentObj;
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
  let wordsCountObject = {};
  if(text){
  let wordsArray = text.split(/\s|,|\.|!|\?/).filter(element => {
    return element !== "";
  });
    wordsArray = wordsArray.map( word => {
    return word.toLowerCase();
  });
  let obj = {};
  wordsArray.forEach( word => {
    obj[word] = true;
  });

  Object.keys(obj).forEach(word => {
    wordsCountObject[word] = wordsArray.filter(wordFromArray => wordFromArray === word).length;
  });}
  return wordsCountObject;
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
  let user = {login: login, password: password};
  user. isWeakPassword = function () {
    return user.password === user.password.toUpperCase() || user.password === user.password.toLowerCase();
  };
  return user;
}
