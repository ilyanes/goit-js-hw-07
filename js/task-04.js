// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
console.log(decrement);
const someValue = document.querySelector("#value");
console.log(someValue);

function incrementClick() {
  counterValue += 1;
  someValue.textContent = counterValue;
}
increment.addEventListener("click", incrementClick);

function decrementClick() {
  counterValue -= 1;
  someValue.textContent = counterValue;
}

decrement.addEventListener("click", decrementClick);
