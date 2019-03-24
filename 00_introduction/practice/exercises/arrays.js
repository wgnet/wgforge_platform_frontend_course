/*
Given a list of strings, return the count of the number of
strings where the string length is 2 or more and the first
and last chars of the string are the same.

['abc', 'aa', 'bb'] yields 2
*/
export function matchEnds(words) {
  let numberOfSuitableWords = 0;
  words.forEach(word => {
    if(word.length >= 2 && word[0] === word[word.length - 1]){
      numberOfSuitableWords++;
      if(word === words[words.length - 1]){
        return numberOfSuitableWords;
      }
    }
  });
  return 0;
}

/*
Given an array of numbers, return new array where
first element is diffrence between maximum and minimum of passed array
last element is sum of minimum and maximum
and passed array in center
[1, 2, 3] yields [2, 1, 2, 3, 4]
[5, 2, 14] yields [12, 5, 2, 14, 16]
*/
export function addFirstAndLast(numbers) {
  let modifiedArray;
  modifiedArray[0] = Math.max.apply(null, numbers) - Math.min.apply(null, numbers);
  modifiedArray.concat(numbers);
  modifiedArray[modifiedArray.length] = Math.max.apply(null, numbers) + Math.min.apply(null, numbers);
  return modifiedArray;
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
  return sortedArray.filter(word => word[0] === 'x').sort((word1, word2) => word1.localeCompare(word2)).concat(sortedArray.filter(word => word[0] !== 'x').sort((word1, word2) => word1.localeCompare(word2)));
}

/*
Given a list of non-empty arrays, return a list sorted in increasing
order by the last element in each tuple.
e.g. [[1, 7], [1, 3], [3, 4, 5], [2, 2]] yields
[[2, 2], [1, 3], [3, 4, 5], [1, 7]]
*/
export function sortByLast(nestedArrays) {
  let sortedArray = nestedArrays;
  return sortedArray.sort((subArray1, subArray2) => {
    return subArray1[subArray1.length-1] < subArray2[subArray2.length-1] ? -1 : subArray1[subArray1.length-1] > subArray2[subArray2.length-1] ? 1 : 0;
  });

}
