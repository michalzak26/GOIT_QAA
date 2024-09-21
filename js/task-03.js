// Tablica z danymi obrazów
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
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
