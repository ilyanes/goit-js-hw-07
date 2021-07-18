// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
console.dir(ingredients);
const ingredientsList = document.querySelector("#ingredients");
// console.log(ingredientsList);

const ingredientsListNew = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  return ingredientItem;
});
// console.log(ingredientsListNew);
ingredientsList.append(...ingredientsListNew);
console.log(ingredientsList);
