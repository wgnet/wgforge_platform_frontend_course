import test from 'tape';

import { matchEnds, xLetterFirst, sortByLast, addFirstAndLast } from './../exercises/arrays';

test('matchEnds', t => {
  t.equal(matchEnds(['aba', 'xyz', 'aa', 'x', 'bbb']), 3);
  t.equal(matchEnds(['', 'x', 'xy', 'xyx', 'xx']), 2);
  t.equal(matchEnds(['aaa', 'be', 'abc', 'hello']), 1);

  t.end();
});

test('addFirstAndLast', t => {
  t.deepEqual(addFirstAndLast([1, 2, 3]), [2, 1, 2, 3, 4]);
  t.deepEqual(addFirstAndLast([5, 47, 13]), [42, 5, 47, 13, 52]);
  t.deepEqual(addFirstAndLast([1, 1, 1]), [0, 1, 1, 1, 2]);
  t.deepEqual(addFirstAndLast([-10, 5, 7]), [17, -10, 5, 7, -3]);
  t.end();
});

test('xLetterFirst', t => {
  t.deepEqual(xLetterFirst(['bbb', 'ccc', 'axx', 'xzz', 'xaa']), [
    'xaa',
    'xzz',
    'axx',
    'bbb',
    'ccc'
  ]);
  t.deepEqual(xLetterFirst(['ccc', 'bbb', 'aaa', 'xcc', 'xaa']), [
    'xaa',
    'xcc',
    'aaa',
    'bbb',
    'ccc'
  ]);
  t.deepEqual(xLetterFirst(['mix', 'xyz', 'apple', 'xanadu', 'aardvark']), [
    'xanadu',
    'xyz',
    'aardvark',
    'apple',
    'mix'
  ]);

  t.end();
});

test('sortByLast', t => {
  t.deepEqual(sortByLast([[1, 3], [3, 2], [2, 1]]), [[2, 1], [3, 2], [1, 3]]);
  t.deepEqual(sortByLast([[2, 3], [1, 2], [3, 1]]), [[3, 1], [1, 2], [2, 3]]);
  t.deepEqual(sortByLast([[1, 7], [1, 3], [3, 4, 5], [2, 2]]), [[2, 2], [1, 3], [3, 4, 5], [1, 7]]);

  t.end();
});
