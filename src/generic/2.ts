/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, T>
): AllType {
  return {
    name: (top as AllType).name || (bottom as AllType).name || '',
    color: (top as AllType).color || (bottom as AllType).color || '',
    position: (bottom as AllType).position || (top as AllType).position || 0,
    weight: (bottom as AllType).weight || (top as AllType).weight || 0,
  };
}

export {};
