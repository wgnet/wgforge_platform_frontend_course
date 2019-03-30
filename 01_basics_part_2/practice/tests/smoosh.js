import test from 'tape-catch';

import { smoosh, squeeze } from '../exercises/smoosh';

test('Smoosh', t => {
  t.deepEqual(smoosh([1, 2, [3, 4]]), [1, 2, 3, 4]);
  t.deepEqual(smoosh([1, 2, [3, 4, [5, 6]]]), [1, 2, 3, 4, 5, 6]);
  t.deepEqual(smoosh([1, [2, [3, 4]], [[5, 6], [7, [8, [9]]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  t.deepEqual(smoosh([[7, [9, [10, 11]], 8]]), [7, 9, 10, 11, 8]);

  const ORIG_LIST = [1, [2], 3, [4, [5]]];
  const smooshed = smoosh(ORIG_LIST);
  t.false(Object.is(smooshed, ORIG_LIST), 'return new array');

  t.end();
});

test('Squeeze', t => {
  const ORIG_LIST = [1, [2], 3, [4, [5]]];
  const squeezed = squeeze(ORIG_LIST);
  t.true(Object.is(squeezed, ORIG_LIST), 'modifies array by reference');
  t.deepEqual(squeezed, [1, 2, 3, 4, 5], 'flatten array');
  t.end();
});

test('Error handling', t => {
  try {
    smoosh(42);
  } catch (e) {
    t.equal(e.message, 'argument should be an array', 'smoosh throws proper error');
  }
  try {
    squeeze('whatever');
  } catch (e) {
    t.equal(e.message, 'argument should be an array', 'squeeze throws proper error');
  }
  t.end();
});
