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

export default function query(tableName = null) {
    let queryFuncArgument = tableName;
    let methodFromIsNeeded = true;
    let methodIsCalled = false;
    let result = [];

    

    function addQuotes(value) {
        if (typeof value === 'string') {
            return `'${value}'`;
        }
        return value;
    }
    function Where(prefix, context, str) {
        let notIsCalled = false;
        this.equals = function (value) {
            if (notIsCalled) {
                result.push(prefix, 'NOT', str, '=', addQuotes(value));
            } else {
                result.push(prefix, str, '=', addQuotes(value));
            }
            return context;
        }
        this.in = function (array) {
            if (!Array.isArray(array)) {
                return console.error('argument should be an array');
            }

            let arr = array.map(el => addQuotes(el)); // если строка оборачиваем в кавычки

            if (notIsCalled) {
                result.push(prefix, str, 'NOT', 'IN', `(${arr.join(', ')})`);
            } else {
                result.push(prefix, str, 'IN', `(${arr.join(', ')})`);
            }
            return context;
        }
        this.gt = function (value) {
            if (notIsCalled) {
                result.push(prefix, 'NOT', str, '>', addQuotes(value));
            } else {
                result.push(prefix, str, '>', addQuotes(value));
            }
            return context;
        }
        this.gte = function (value) {
            if (notIsCalled) {
                result.push(prefix,'NOT', str, '>=', addQuotes(value));
            } else {
                result.push(prefix, str, '>=', addQuotes(value));
            }
            return context;
        }
        this.lt = function (value) {
            if (notIsCalled) {
                result.push(prefix,'NOT', str, '<', addQuotes(value));
            } else {
                result.push(prefix, str, '<', addQuotes(value));
            }            
            return context;
        }
        this.lte = function (value) {
            if (notIsCalled) {
                result.push(prefix,'NOT', str, '<=', addQuotes(value));
            } else {
                result.push(prefix, str, '<=', addQuotes(value));
            }            
            return context;
        }
        this.between = function (fromValue, toValue) {
            if (notIsCalled) {
                result.push(prefix, str, 'NOT', 'BETWEEN', addQuotes(fromValue), 'AND', addQuotes(toValue));
            } else {
                result.push(prefix, str, 'BETWEEN', addQuotes(fromValue), 'AND', addQuotes(toValue));
            }
            return context;
        },
            this.isNull = function () {
                if (notIsCalled) {
                    result.push(prefix, str, 'IS', 'NOT', 'NULL');
                } else {
                    result.push(prefix, str, 'IS', 'NULL');
                }
                return context;
            },
            this.not = function () {
                if (notIsCalled) {
                    return console.error("not() can't be called multiple times in a row");
                } else {
                    notIsCalled = true;
                }
                return this
            }
    }

    return {
        select(...strings) {
            if (strings.some(argOfSelectMetod => typeof argOfSelectMetod !== 'string')) {
                return console.error('arguments should be a strings');
            }
            if (!arguments.length) {
                result.push('SELECT', '*');
            } else {
                result.push('SELECT', ...strings);
            }
            return this;
        },
        from(tableName = queryFuncArgument) {
            if (typeof tableName !== 'string') {
                return console.error('arguments should be a strings');
            }
            if (queryFuncArgument && methodFromIsNeeded) {
                result.push('FROM', queryFuncArgument);
                methodFromIsNeeded = false;
            } else if (tableName && methodFromIsNeeded) {
                result.push('FROM', tableName);
                methodFromIsNeeded = false;
            }
            return this;
        },
        where(str) {
            if (typeof str !== 'string') {
                return console.error('arguments should be a strings');
            }
            let prefix;
            if (!methodIsCalled && !methodFromIsNeeded) {
                prefix = 'WHERE';
                methodIsCalled = true;
            } else {
                prefix = 'AND';
            }
            return new Where(prefix, this, str);
        },
        orWhere(str) {
            if (typeof str !== 'string') {
                return console.error('arguments should be a strings');
            }
            let prefix;
            if (!methodIsCalled && !methodFromIsNeeded) {
                prefix = 'WHERE';
                methodIsCalled = true;
            } else {
                prefix = 'OR';
            }
            return new Where(prefix, this, str);
        },
        toString() {
            return result.join(' ') + ';';
        }
    }
}
