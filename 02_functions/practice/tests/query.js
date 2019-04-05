import test from 'tape-catch';

import query from '../exercises/query';

const QUERY_METHODS = ['select', 'from', 'where', 'orWhere', 'toString'];
const WHERE_METHODS = ['equals', 'in', 'gt', 'gte', 'lt', 'lte', 'between', 'isNull', 'not'];

test('query', t => {
  t.equal(typeof query, 'function');

  const q = query();

  t.equal(typeof q, 'object');

  const methods = Object.keys(q);

  t.deepEqual(methods, QUERY_METHODS, '`query` has proper methods');

  const whereStmt = q.where('id');

  for (const whereMethod of WHERE_METHODS) {
    t.equal(typeof whereStmt[whereMethod], 'function', `where.${whereMethod} is a function`);
  }

  for (const method of methods) {
    t.equal(typeof q[method], 'function', `where.${method} is a function`);
  }

  t.test('generated SQL', qt => {
    const select = q.select().from('user');

    qt.equal(select.toString(), 'SELECT * FROM user;');
    qt.equal(select.from('ignore_this').toString(), 'SELECT * FROM user;');
    qt.equal(
      select
        .where('id')
        .in([42, 1337])
        .toString(),
      'SELECT * FROM user WHERE id IN (42, 1337);'
    );
    qt.equal(
      query()
        .select()
        .from('user')
        .where('name')
        .equals('Vasya')
        .where('id')
        .between(121, 12321)
        .toString(),
      `SELECT * FROM user WHERE name = 'Vasya' AND id BETWEEN 121 AND 12321;`
    );

    qt.equal(
      query()
        .select()
        .from('user')
        .where('id')
        .lte(42)
        .orWhere('id')
        .gte('12321')
        .toString(),
      `SELECT * FROM user WHERE id <= 42 OR id >= '12321';`
    );

    qt.equal(
      query()
        .select()
        .from('user')
        .orWhere('id')
        .gt(42)
        .orWhere('id')
        .lt('i am a string')
        .toString(),
      `SELECT * FROM user WHERE id > 42 OR id < 'i am a string';`
    );

    qt.equal(
      query()
        .select()
        .from('user')
        .where('id')
        .not()
        .equals(42)
        .toString(),
      `SELECT * FROM user WHERE NOT id = 42;`
    );

    qt.equal(
      query()
        .select()
        .from('user')
        .where('id')
        .not()
        .isNull()
        .toString(),
      `SELECT * FROM user WHERE id IS NOT NULL;`
    );

    qt.equal(
      query()
        .select()
        .from('user')
        .where('id')
        .not()
        .in([1, '3', 5, '7'])
        .toString(),
      `SELECT * FROM user WHERE id NOT IN (1, '3', 5, '7');`
    );

    qt.end();
  });

  t.test('handle errors', et => {
    t.throws(() => {
      query().not();
    }, "not() can't be called before where");

    t.throws(() => {
      query()
        .where()
        .not()
        .not();
    }, "not() can't be called multiple times in a row");
    et.end();
  });

  t.end();
});
