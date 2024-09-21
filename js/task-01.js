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