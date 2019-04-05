/*
Given a list of strings, return the count of the number of
strings where the string length is 2 or more and the first
and last chars of the string are the same.

['abc', 'aa', 'bb'] yields 2
*/
export function matchEnds(words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 2 && words[i][0] === words[i][words[i].length - 1]) {
      count++;
    }
  }
  return count;
}

/*
Given an array of numbers, return new array where
first element is diffrence between maximum and minimum of passed array
last element is sum of minimum and maximum
and passed array in center
[1, 2, 3] yields [2, 1, 2, 3, 4]
[5, 2, 14] yields [12, 5, 2, 14, 19]
*/
export function addFirstAndLast(numbers) {
  let sortedArray = [],
    maxElem = Math.max(...numbers),
    minElem = Math.min(...numbers);
  sortedArray.push(maxElem - minElem, ...numbers, minElem + maxElem);
  return sortedArray;
}

/*
Given a list of strings, return a list with the strings
in sorted order, except group all the strings that begin with 'x' first.
e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
Hint: this can be done by making 2 lists and sorting each of them
before combining them.
*/
export function xLetterFirst(words) {
  let firstX = [],
    remainedArray = [];
  words.forEach((e) => {
    if (e[0] === 'x') {
      firstX.push(e);
    } else {
      remainedArray.push(e);
    }
  });
  firstX.sort();
  remainedArray.sort();
  firstX = firstX.concat(remainedArray);
  return firstX;
}

/*
Given a list of non-empty arrays, return a list sorted in increasing
order by the last element in each tuple.
e.g. [[1, 7], [1, 3], [3, 4, 5], [2, 2]] yields
[[2, 2], [1, 3], [3, 4, 5], [1, 7]]
*/
export function sortByLast(nestedArrays) {
  nestedArrays.sort((a, b) => {
    return a[a.length - 1] - b[b.length - 1];
  });
  return nestedArrays;
}
