/**
 * Задание: написать функцию sleep, которая приостанавливает работу потока на
 * время переданное в аргументе. Время задаётся в секундах с точностью до 1 сек.
 * Если передан не валидный аргумент функция должна сразу завершить своё
 * выполнение и вернуть undefined.
 */

export default function sleep(duration) {
  if (Number.isInteger(duration)) {
    const endTime = new Date().getTime() + duration * 1000;
    while (new Date().getTime() < endTime) {}
  } else {
    return undefined;
  }
}
