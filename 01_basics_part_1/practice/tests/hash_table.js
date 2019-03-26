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
  t.equal(hashTable.get('foo'), 'bar', 'set/get works properly');
  hashTable.remove('foo');
  t.equal(hashTable.get('foo'), undefined, 'remove works');

  t.end();
});
