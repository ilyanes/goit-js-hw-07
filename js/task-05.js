// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение
// в span#name - output.Если инпут пустой, в спане должна отображаться
// строка 'незнакомец'.
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.log(input);
console.log(output);

input.addEventListener("input", inputWord);

function inputWord(inputText) {
  if (inputText.currentTarget.value === "") {
    output.textContent = "незнакомец";
  } else {
    output.textContent = inputText.currentTarget.value;
  }
}
