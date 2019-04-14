import test from 'tape-catch';
import cloneDeep from '../exercises/cloneDeep';

const sourceObject = {
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

test('cloneDeep', t => {
  t.equal(typeof cloneDeep, 'function');

  const clonedInstance = cloneDeep(sourceObject);

  t.test('clone deep objects by value', tt => {
    tt.equal(
      clonedInstance.forgeFrontend.coaches[0] === sourceObject.forgeFrontend.coaches[0],
      false
    );
    tt.equal(clonedInstance.forgeMaintaince[0] === sourceObject.forgeMaintaince[0], false);

    tt.end();
  });

  t.end();
});
