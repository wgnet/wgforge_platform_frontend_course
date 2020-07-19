import test from 'tape';

import sleep from '../exercises/sleep';

const DELTA_MS = 50;

test('sleep', t => {
  for (const s of [1, 3, 2]) {
    const start = Date.now();
    sleep(s);
    const spent = Date.now() - start;
    const expected = s * 1000;
    const diff = Math.abs(expected - spent);
    t.true(diff < DELTA_MS);
  }

  t.end();
});

test('sleep bad argument', t => {
  for (const s of ['sleep', [], 2.23]) {
    const start = Date.now();
    t.equal(typeof sleep(s), 'undefined', 'correct return');
    const spent = Date.now() - start;
    t.true(spent < 10);
  }

  t.end();
});

test('argument should be one', t => {
  const start = Date.now();
  sleep(1,2);
  const spent = Date.now() - start;
  t.true(spent < 1000, 'return undefined immediately');
  t.end();
});