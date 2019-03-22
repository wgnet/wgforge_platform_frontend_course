import test from 'tape';

import { concat, oddElements, wordsCount } from './../exercises/strings';

test('concat function', t => {
  t.equal(concat('test', 'bar'), 'testbar', 'It works for two');
  t.equal(concat('test'), 'test', 'It works for single');
  t.equal(concat('1', '2', '3'), '123', 'It works for three');

  t.end();
});

test('oddElements function', t => {
  t.equal(oddElements('taetsgt'), 'test', 'It returns odd elements');
  t.equal(oddElements(''), '', 'It works for empty string');

  t.end();
});

test('wordsCount function', t => {
  t.equal(wordsCount(''), 0, 'It works for empty string');
  t.equal(wordsCount('test'), 1, 'It works for one word');
  t.equal(wordsCount('test bar baz'), 3, 'It works!');

  t.end();
});
