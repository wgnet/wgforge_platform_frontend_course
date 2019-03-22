import test from 'tape-catch';

import { map, fibGenerator, filter, partial } from './../exercises/functions';

test('map', t => {
  t.deepEqual(map([1, 2, 3], x => x * x), [1, 4, 9], 'It works for numbers');
  t.deepEqual(
    map(['foo', 'bar', 'baz'], x => x.toUpperCase()),
    ['FOO', 'BAR', 'BAZ'],
    'It works for strings'
  );
  t.deepEqual(map(['a', 'b', 'c'], x => x + x), ['aa', 'bb', 'cc'], 'It works for concatenation');
  t.end();
});

test('fibGenerator', t => {
  const gen = fibGenerator();
  t.ok(typeof gen === 'function', 'generator is function');
  t.deepEqual(
    new Array(10).fill(null).map(() => gen()),
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
    'It generates fibonaccy secequence'
  );
  t.end();
});

test('filter', t => {
  t.deepEqual(filter([1, 2, 3, 4, 5], x => x % 2 !== 0), [1, 3, 5], 'It filters odd values');
  t.deepEqual(
    filter([true, null, undefined, 'foo', 42], x => !!x),
    [true, 'foo', 42],
    'It filters false values'
  );
  t.end();
});

test('partial', t => {
  const sum = (x, y, z) => x + y + z;
  const addOne = partial(sum, 1);
  const addOneAndTwo = partial(sum, 1, 2);

  t.equal(partial(() => 10)(), 10, 'It works for no arguments');
  t.equal(addOne(2, 3), sum(1, 2, 3), 'It works for one argument');
  t.equal(addOneAndTwo(10), 13, 'It works for two arguments');
  t.end();
});
