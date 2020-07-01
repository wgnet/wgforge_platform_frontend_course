import test from 'tape-catch';
import _zipObject from 'lodash.zipobject';
import zipObject from '../exercises/zipObject';

const props = ['studentsCount', 'coachesCount'];
const values = [15, 2, 15, 16];

test('zipObject', t => {
  t.equal(typeof zipObject, 'function');

  t.test('zipObject corresponding values', tt => {
    tt.deepEqual(zipObject(props, values), _zipObject(props, values));
    tt.deepEqual(
      zipObject(['a', 'b'], [1]),
      { a: 1, b: undefined },
      'should assign "undefined" values for extra "keys"'
    );
    tt.end();
  });

  t.end();
});
