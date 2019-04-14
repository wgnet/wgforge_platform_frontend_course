import test from 'tape-catch';
import _merge from 'lodash.merge';
import deepMerge from '../exercises/deepMerge';

const destinationObject = {
  forgeFrontend: {
    coaches: [{ name: 'Coache 1' }, { name: 'Coache 2' }],
    students: ['Student 1', 'Student 2']
  },
  forgeBackend: {
    coaches: ['Coache 1', 'Coache 2']
  },
  forgeMaintaince: [
    {
      part1: {
        students: ['Student 7', 'Student 8']
      }
    },
    {
      part2: {
        coaches: ['Coache 5', 'Coache 6']
      }
    }
  ]
};

const sourceObject = {
  forgeFrontend: {
    coaches: [{ surname: 'billibob' }, { surname: 'ivanov' }]
  },
  forgeBackend: {
    students: ['Student 3', 'Student 4']
  },
  forgeMaintaince: [
    {
      part1: {
        students: ['Student 9', 'Student 10']
      }
    },
    {
      part2: {
        coaches: ['Coache 7', 'Coache 8']
      }
    }
  ]
};

test('deepMerge', t => {
  t.equal(typeof deepMerge, 'function');

  const deepMergeResult = deepMerge(destinationObject, sourceObject);
  const expectedMergeResult = _merge(destinationObject, sourceObject);

  t.test('deep merge two objects', tt => {
    tt.deepEqual(deepMergeResult, expectedMergeResult);
    tt.end();
  });

  t.end();
});
