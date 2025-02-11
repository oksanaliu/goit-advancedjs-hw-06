"use strict";
/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType.
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function compare(top, bottom) {
    return {
        name: top.name || bottom.name || '',
        color: top.color || bottom.color || '',
        position: bottom.position || top.position || 0,
        weight: bottom.weight || top.weight || 0,
    };
}
