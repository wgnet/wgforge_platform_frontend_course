/**
 * Задание: написать построитель SQL-запросов.
 * Данный модуль должен экспортировать функцию `query`, вызов которой должен возвращать новый экземпляр объекта query.
 * Например:
 * const q1 = query();
 * const q2 = query();
 * console.log(Object.is(q1, q2)) // false
 *
 * В качестве аргументов query может передаваться имя таблицы.
 * Тогда при дальнейшем составлении запроса вызовы метода from(tableName) игнорируются.
 *
 * У возвращаемого объекта должны быть следующие методы:
 *
 * select(arg1, arg2 ... argN) - может принимать список полей для выборки.
 * Аргументы должны иметь тип String. Если ни одного аргумента не передано должны быть получены все поля таблицы
 * Например:
 * q.select().from('users')
 * > SELECT * FROM users
 * q.select('id', 'name').from('users')
 * > SELECT id, name FROM users
 *
 * from(tableName: String) - указывает из какой таблицы получать данные.
 *
 * where(fieldName: String) - служит для задания условия фильтрации.
 * При множественном вызове метода where в одном запросе условия должны объединяться через логическое "И".
 * Метод where должен возвращать объект имеющий следующие методы:
 * orWhere(fieldName: String) - делает то же самое что where, но объединяет через "ИЛИ".
 * Метод where должен возвращать объект имеющий следующие методы:
 *
 * equals(value: any) - условие равенства
 * Например: SELECT * FROM student WHERE age = 42;
 *
 * in(values: array) - позволяет определить, совпадает ли значение объекта со значением в списке
 * Например: SELECT * FROM offices WHERE city IN ('Minsk', 'Nicosia', 'Seattle');
 *
 * gt(value: any) - условие больше '>'
 * gte(value: any) - условие больше или равно '>='
 * lt(value: any) -  условие меньше '<'
 * lte(value: any) -  условие меньше или равно '<='
 * between(from: any, to: any) -  условие нахождения значения поля в заданном диапазоне:
 * SELECT * FROM products WHERE price BETWEEN 4.95 AND 9.95;
 *
 * isNull() - условие отсутствия значения у поля
 *
 * not() - служит для задания противоположного.
 * После вызова not можно вызывать только те же методы, которые использует where для сравнения.
 *
 * q.select().from('users').where('name').not().equals('Vasya')
 *
 * Вызов not не может быть вызван более одного раза подряд:
 * q.select().from('users').where('name').not().not().equals('Vasya')
 *
 * Внимание: методы сравнения не могут быть вызваны до вызова метода where()!
 *
 * Получения строчного представления сконструированного SQL-запроса должно происходить при
 * вызове метода toString() у объекта query.
 * В конце строки SQL-запроса должен быть символ ';'
 *
 * Дополнительные задания:
 *
 * 1. Добавить в сигнатуру функии query второй опциональный аргумент options типа Object.
 * Если в options есть поле escapeNames со значением true, названия полей и таблиц должны быть обёрнуты в двойные кавычки:
 *
 * const q = query({escapeNames: true});
 * q.select('name').from('people').toString()
 * > SELECT "name" FROM "people";

 * const q = query('books', {escapeNames: true});
 * q.select('title').toString()
 * > SELECT "title" FROM "books";
 *
 * 2. Добавить возможность передавать в условия методов сравнения в качестве значения экземпляр запроса query.
 *
 * const q1 = query('users');
 * const admins = q1.select('id').where('role').equals('admin');
 * const q2 = query('posts');
 * const posts = q2.select().where('author_id').in(admins);
 * posts.toString();
 * > SELECT * FROM posts WHERE author_id IN (SELECT id FROM users WHERE role = 'admin');
 *
 * 3. Реализовать функциональность создания INSERT и DELETE запросов. Написать для них тесты.
 */
/* eslint-disable no-use-before-define*/
export default function query() {
  let sqlQuery = '';
  let isWhereUsed = false;

  const select = function(columnName) {
    resetToInitialState();
    if (columnName) {
      sqlQuery += `SELECT ${columnName}`;
    } else {
      sqlQuery += 'SELECT *';
    }
    return { from, not };
  };

  const from = function(tableName) {
    sqlQuery += ` FROM ${tableName}`;
    return { where, toString, from: getFromCondition, orWhere, not };
  };

  const where = function(condition) {
    if (isWhereUsed) {
      sqlQuery += ` AND ${condition}`;
    } else {
      sqlQuery += ` WHERE ${condition}`;
      isWhereUsed = true;
    }

    return {
      equals,
      gt,
      lt,
      gte,
      lte,
      in: inFunc,
      not: notWhere,
      isNull,
      between
    };
  };

  const equals = function(condition) {
    sqlQuery += ` = ${getFormattedCondition(condition)}`;
    return {
      toString,
      orWhere,
      where
    };
  };

  const gt = function(condition) {
    sqlQuery += ` > ${getFormattedCondition(condition)}`;
    return {
      toString,
      orWhere,
      where
    };
  };

  const gte = function(condition) {
    sqlQuery += ` >= ${getFormattedCondition(condition)}`;
    return {
      toString,
      orWhere,
      where
    };
  };

  const lt = function(condition) {
    sqlQuery += ` < ${getFormattedCondition(condition)}`;
    return {
      toString,
      orWhere,
      where
    };
  };

  const lte = function(condition) {
    sqlQuery += ` <= ${getFormattedCondition(condition)}`;
    return {
      toString,
      orWhere,
      where
    };
  };

  const inFunc = function(condition) {
    const interval = condition.map(element => {
      return getFormattedCondition(element);
    });
    sqlQuery += ` IN (${interval.join(', ')})`;
    return {
      toString,
      orWhere,
      where
    };
  };

  const notWhere = function() {
    sqlQuery = sqlQuery.split(' ');
    sqlQuery.splice(sqlQuery.indexOf('WHERE') + 1, 0, 'NOT');
    sqlQuery = sqlQuery.join(' ');
    return {
      isNull: isWhereNotNull,
      in: whereNotIn,
      between: whereNotBetween,
      equals,
      lt,
      gt,
      lte,
      gte,
      toString
    };
  };

  const notBetween = function(value1, value2) {
    sqlQuery += ` NOT BETWEEN ${value1} AND ${value2}`;
    return {
      toString,
      orWhere,
      where
    };
  };

  const whereNotBetween = function(value1, value2) {
    deleteNotAfterWhere();
    return notBetween(value1, value2);
  };

  const whereNotIn = function(condition) {
    deleteNotAfterWhere();
    sqlQuery += ' NOT';
    return inFunc(condition);
  };

  const isWhereNotNull = function() {
    deleteNotAfterWhere();
    return isNotNull();
  };

  const between = function(value1, value2) {
    sqlQuery += ` BETWEEN ${value1} AND ${value2}`;
    return {
      toString,
      orWhere,
      where
    };
  };

  const isNull = function() {
    return {
      toString,
      orWhere,
      where
    };
  };

  const not = function() {
    return {
      isNull: isNotNull,
      in: notIn,
      between: notBetween,
      toString
    };
  };

  const isNotNull = function() {
    sqlQuery += ' IS NOT NULL';
    return {
      toString,
      orWhere,
      where
    };
  };

  const notIn = function(condition) {
    sqlQuery += ` NOT IN (${condition.join(', ')})`;
    return {
      toString,
      orWhere
    };
  };

  const getFromCondition = function() {
    return { where, toString };
  };

  const toString = function() {
    return `${sqlQuery};`;
  };

  const getFormattedCondition = function(element) {
    if (typeof element === 'string') {
      return `'${element}'`;
    }
    return element;
  };

  const deleteNotAfterWhere = function() {
    sqlQuery = sqlQuery.split(' ');
    sqlQuery.splice(sqlQuery.indexOf('NOT'), 1);
    sqlQuery = sqlQuery.join(' ');
  };

  const orWhere = function(condition) {
    if (!isWhereUsed) {
      sqlQuery += ` WHERE ${condition}`;
      isWhereUsed = true;
    } else {
      sqlQuery += ` OR ${condition}`;
    }
    return {
      equals,
      gt,
      lt,
      gte,
      lte,
      in: inFunc,
      not: notWhere,
      isNull,
      between
    };
  };

  const resetToInitialState = function() {
    sqlQuery = '';
    isWhereUsed = false;
  };

  return {
    select,
    where,
    from,
    orWhere,
    toString
  };
}
