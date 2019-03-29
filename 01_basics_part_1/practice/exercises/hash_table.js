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
    let sum = 0;
    for(let i = 0; i < key.length; i++){
      sum += key.charCodeAt(i);
    }
    return sum % 37;
  }

  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    if(this.memory[this.hashKey(key)]){
      return this.memory[this.hashKey(key)].find((currentElement) => {
        return currentElement[0] === key;
      })[1];
    }
   return undefined;
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    if(this.memory[this.hashKey(key)]){
      let collision = this.memory[this.hashKey(key)].find((currentElement) => {
        return currentElement[0] === key;
      });

     if(collision){
        for(let i = 0; i < this.memory[this.hashKey(key)].length; i++){
          if(this.memory[this.hashKey(key)][i][0] === key){
            this.memory[this.hashKey(key)][i] = [key, value];
          }
        }
     }
     else{
       this.memory[this.hashKey(key)].push([key, value]);
     }

    }
    else{
      this.memory[this.hashKey(key)] =[];
      this.memory[this.hashKey(key)].push([key, value]);
    }
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    if(this.memory[this.hashKey(key)].length > 1){
      for(let i = 0; i < this.memory[this.hashKey(key)].length; i++){
        if(this.memory[this.hashKey(key)][i][0] === key){
          this.memory[this.hashKey(key)].splice(i, 1);
        }
      }
    }
    else{
      this.memory.splice(this.hashKey(key), 1);
    }
  }
}
