/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать 
значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/
let counterValue = 0;

const addBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const removeBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const valueRef = document.querySelector("#value");

// const increment = (item) => {
//   for (let i = 0; i < item.length; i++) {
//     counterValue += 1;
//     return (valueRef.textContent = counterValue);
//   }
// };

// const decrement = (item) => {
//   for (let i = 0; i < item.length; i++) {
//     counterValue -= 1;
//     return (valueRef.textContent = counterValue);
//   }
// };

// Почему не работает через цикл?????????

const increment = () => {
  counterValue += 1;
  return (valueRef.textContent = counterValue);
};

const decrement = () => {
  counterValue -= 1;
  return (valueRef.textContent = counterValue);
};

addBtn.addEventListener("click", increment);
removeBtn.addEventListener("click", decrement);
