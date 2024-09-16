// Pobieramy wszystkie elementy li.item
const categories = document.querySelectorAll('#categories .item');

// Wyświetlamy liczbę kategorii
console.log(`Number of categories: ${categories.length}`);

// Iteracja po każdej kategorii
categories.forEach(category => {
  const title = category.querySelector('h2').textContent; // Pobieramy tytuł kategorii
  const elementsCount = category.querySelectorAll('ul li').length; // Liczymy elementy w każdej kategorii
  
  // Wyświetlamy tytuł i liczbę elementów
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});

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

// Tablica z danymi obrazów
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Pobieramy ul.gallery
const gallery = document.querySelector('.gallery');

// Tworzymy elementy galerii za pomocą template literals
const galleryItems = images.map(image => 
  `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}"></li>`
).join('');

// Wstawiamy wygenerowane elementy do ul.gallery w jednej operacji
gallery.insertAdjacentHTML('beforeend', galleryItems);


