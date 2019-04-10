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
/* eslint-disable func-style*/
/* eslint-disable no-unused-vars*/
/* eslint-disable no-use-before-define*/
export default function query() {
  let sqlQuery = '';
  let whereCounter = 0;

  const equals = function(condition) {
    if (typeof condition === 'string') {
      sqlQuery += ` = '${condition}'`;
    } else {
      sqlQuery += ` = ${condition}`;
    }
    return {
      toString,
      orWhere,
      where
    };
  };

  function gt(condition) {
    if (typeof condition === 'string') {
      sqlQuery += ` > '${condition}'`;
    } else {
      sqlQuery += ` > ${condition}`;
    }
    return {
      toString,
      orWhere,
      where
    };
  }

  function inFunc(condition) {
    let interval = '';
    condition.forEach((element, index) => {
      if (index !== 0) {
        if (typeof element === 'string') {
          interval += `, '${element}'`;
        } else {
          interval += `, ${element}`;
        }
      } else if (typeof element === 'string') {
        interval += `'${element}'`;
      } else {
        interval += element;
      }
    });
    sqlQuery += ` IN (${interval})`;
    return {
      toString,
      orWhere,
      where
    };
  }

  function gte(condition) {
    if (typeof condition === 'string') {
      sqlQuery += ` >= '${condition}'`;
    } else {
      sqlQuery += ` >= ${condition}`;
    }
    return {
      toString,
      orWhere,
      where
    };
  }

  function notWhere() {
    sqlQuery = [...sqlQuery.split(' ')];
    sqlQuery.splice(sqlQuery.indexOf('WHERE') + 1, 0, 'NOT');
    sqlQuery = sqlQuery.join(' ');
    return {
      isNull: isWhereNotNull,
      in: whereNotIn,
      equals,
      lt,
      gt,
      lte,
      gte,
      toString
    };
  }

  function whereNotIn(condition) {
    sqlQuery = [...sqlQuery.split(' ')];
    sqlQuery.splice(sqlQuery.indexOf('NOT'), 1);
    sqlQuery = `${sqlQuery.join(' ')} NOT`;
    return inFunc(condition);
  }

  function isWhereNotNull() {
    sqlQuery = [...sqlQuery.split(' ')];
    sqlQuery.splice(sqlQuery.indexOf('NOT'), 1);
    sqlQuery = sqlQuery.join(' ');
    return isNotNull();
  }

  function lt(condition) {
    if (typeof condition === 'string') {
      sqlQuery += ` < '${condition}'`;
    } else {
      sqlQuery += ` < ${condition}`;
    }
    return {
      toString,
      orWhere,
      where
    };
  }

  function lte(condition) {
    if (typeof condition === 'string') {
      sqlQuery += ` <= '${condition}'`;
    } else {
      sqlQuery += ` <= ${condition}`;
    }
    return {
      toString,
      orWhere,
      where
    };
  }

  function between(value1, value2) {
    sqlQuery += ` BETWEEN ${value1} AND ${value2}`;
    return {
      toString,
      orWhere,
      where
    };
  }

  function isNull() {
    return {
      toString,
      orWhere,
      where
    };
  }

  function not() {
    return {
      isNull: isNotNull,
      in: notIn,
      equals,
      lt,
      gt,
      lte,
      gte,
      toString
    };
  }

  function isNotNull() {
    sqlQuery += ' IS NOT NULL';
    return {
      toString,
      orWhere,
      where
    };
  }

  function notIn(condition) {
    sqlQuery += ` NOT (${condition.join(', ')})`;
    return {
      toString,
      orWhere
    };
  }

  function select(columnName) {
    whereCounter = 0;
    sqlQuery = '';
    if (columnName) {
      sqlQuery += `SELECT ${columnName}`;
    } else {
      sqlQuery += 'SELECT *';
    }
    return { from };
  }

  function where(condition) {
    if (whereCounter > 0) {
      sqlQuery += ` AND ${condition}`;
    } else {
      sqlQuery += ` WHERE ${condition}`;
    }

    whereCounter++;

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
  }

  function from(tableName) {
    sqlQuery += ` FROM ${tableName}`;
    return { where, toString, from: getFromCondition, orWhere };
  }

  function getFromCondition() {
    return { where, toString };
  }

  function toString() {
    return `${sqlQuery};`;
  }

  function orWhere(condition) {
    if (whereCounter === 0) {
      sqlQuery += ` WHERE ${condition}`;
    } else {
      sqlQuery += ` OR ${condition}`;
    }

    whereCounter++;
    return {
      equals,
      gt,
      lt,
      gte,
      lte,
      in: inFunc,
      not,
      isNull,
      between
    };
  }

  return {
    select,
    where,
    from,
    orWhere,
    toString
  };
}
