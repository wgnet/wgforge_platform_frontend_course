/* eslint-disable filenames/match-regex */
/**
 * Необходимо реализовать хеш-таблицу, в которой в значения можно записывать данные любого типа.
 * Ключом должна быть строка.
 */

export default class HashTable {
  /**
   * в качестве "памяти" используем массив
   */
  constructor() {
    this.memory = [];
  }

  /**
   * Хеширующая функция.
   * Принимает ключ (тип строка) и возвращает уникальный адрес.
   * hashKey('abc') =>  17263
   * hashKey('xyz') => 283902
   */

  hashKey(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i) + i * 'qwerty'.charCodeAt(i % 6);
    }
    return hashValue;
  }


  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    return this.memory[this.hashKey(key)];
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    this.memory[this.hashKey(key)] = value;
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    delete this.memory[this.hashKey(key)];
  }
}
