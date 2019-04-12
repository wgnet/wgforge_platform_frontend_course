import test from 'tape';

import Queue from '../exercises/queue';

test('Queue', t => {
  const queue = new Queue();

  queue.enqueue(1);
  t.equal(queue.length, 1, 'enqueue increases queue length');
  queue.enqueue(2);
  
  t.equal(queue.peek(), 1, 'peek works');
  t.equal(queue.length, 2, 'peek doesnt change queue length');
  t.equal(queue.dequeue(), 1, 'dequeu works');
  t.equal(queue.length, 1, 'dequeu decreases queue length');
  t.equal(queue.peek(), 2, 'peek still works');
  t.equal(queue.length, 1, 'peek doesnt change queue length');
  t.equal(queue.dequeue(), 2, 'and dequeu works also');
  t.equal(queue.length, 0, 'dequeu also decreases queue length');

  t.end();
});
