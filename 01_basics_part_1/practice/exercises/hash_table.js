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
    for(let i = 0; i < this.memory.length; i++){
      if(this.memory[i][0] === key){
        return i;
      }
    }
    return null;
  }

  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    const getRightSet = this.memory.filter(element => element[0] === key);
    if(getRightSet && getRightSet.length > 0){
      return getRightSet[0][1];
    }
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    this.memory.push([key,value]);
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    if(this.memory.length > 0){
      for(let i = 0; i < this.memory.length; i++){
        if(this.memory[i][0] === key){
          this.memory.splice(i,1);
        }
      }
    }
  }
}
