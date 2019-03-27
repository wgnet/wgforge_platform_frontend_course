import test from 'tape';

import Stack from '../exercises/stack';

test('Stack', t => {
  const stack = new Stack();

  stack.push(1);
  t.equal(stack.length, 1, 'push increases stack length');
  stack.push(2);

  t.equal(stack.peek(), 2, 'peek works');
  t.equal(stack.length, 2, 'peek doesnt change stack length');
  t.equal(stack.pop(), 2, 'pop works');
  t.equal(stack.length, 1, 'pop decreases stack length');
  t.equal(stack.peek(), 1, 'peek works again');
  t.equal(stack.length, 1, 'peek still doesnt change stack length');
  t.equal(stack.pop(), 1, 'pop works also');
  t.equal(stack.length, 0, 'pop still decreases stack length');

  t.end();
});
