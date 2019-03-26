import test from 'tape';

import Stack from '../exercises/stack';

test('Stack', t => {
  const stack = new Stack();

  stack.push(1);
  stack.push(2);

  t.equal(stack.peek(), 2, 'peek works');
  t.equal(stack.pop(), 2, 'pop works');
  t.equal(stack.peek(), 1, 'peek works again');
  t.equal(stack.pop(), 1, 'pop works also');

  t.end();
});
