// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const addedItems = ingredients.map((item) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = item;
  //   console.log(itemRef);
  return itemRef;
});

const ingrListRef = document.querySelector("#ingredients");
ingrListRef.append(...addedItems);
