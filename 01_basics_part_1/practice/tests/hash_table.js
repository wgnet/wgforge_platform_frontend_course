/* eslint-disable filenames/match-regex */
import test from 'tape';

import HashTable from '../exercises/hash_table';

test('HashTable', t => {
  const hashTable = new HashTable();

  const monkeyHash = hashTable.hashKey('monkey');
  t.equal(hashTable.hashKey('monkey'), monkeyHash, 'hashKey idempotent');
  hashTable.hashKey('iamabug');
  t.equal(hashTable.hashKey('monkey'), monkeyHash, 'hashKey is still idempotent');

  hashTable.set('foo', 'bar');
  hashTable.set('foo', 'barррр');
  t.equal(hashTable.get('foo'), 'barррр', 'set/get works properly and works with collisions');
  hashTable.remove('foo');
  t.equal(hashTable.get('foo'), undefined, 'remove works');

  t.equal(typeof hashTable.hashKey('cool test string'), 'number' , 'hashKey returns a number');
  t.notEqual(hashTable.hashKey('cool test string'), NaN , 'hashKey doesnt return NaN');
  t.notEqual(hashTable.hashKey('cool test string'), undefined , 'hashKey doesnt return undefined');

  t.end();
});
