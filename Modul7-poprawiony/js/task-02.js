//Tablica ze składnikami
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Pobieramy ul#ingredients
const ingredientsList = document.querySelector('#ingredients');

// Tworzymy elementy li dla każdego składnika
const items = ingredients.map(ingredient => {
  const li = document.createElement('li'); // Tworzymy element li
  li.textContent = ingredient; // Ustawiamy tekst li
  li.classList.add('item'); // Dodajemy klasę 'item'
  return li;
});

// Wstawiamy wszystkie elementy li do listy ul#ingredients w jednej operacji
ingredientsList.append(...items);
