"use strict";
/*
  У вас є функція merge, яка поєднує два об'єкти.
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
