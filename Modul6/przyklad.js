//PRZYKLAD 1
// Tworzymy obiekt reprezentujący osobę o imieniu Maciej
const person = {
  username: "Maciej",  // Właściwość przechowująca imię
  
  // Metoda showName wypisuje imię, odnosząc się do obiektu za pomocą this
  showName: function() 
  {
    console.log(this.username);  // this odnosi się do obiektu person
  }
};


//PRZYKLAD 2

// Wywołanie metody showName
person.showName();  // Oczekiwany wynik: "Maciej"

//Metoda showName() używa this do odwołania się do właściwości username w obiekcie person. 
//Gdy metoda jest wywoływana, this wskazuje na obiekt person.

// Tworzymy obiekt bookshelf reprezentujący półkę na książki
const bookshelf = {
  authors: ["Mike Wazowski"],  // Tablica przechowująca autorów

  // Metoda zwracająca tablicę autorów
  getAuthors() {
    return this.authors;  // this odnosi się do obiektu bookshelf
  },
  
  // Metoda dodająca autora do tablicy authors
 addAuthor(authorName) {
 this.authors.push(authorName);  // this odnosi się do obiektu bookshelf
  },
};

// Dodajemy autorów do półki na książki
bookshelf.addAuthor("Bernard Cornwell");
bookshelf.addAuthor("Robert Sheckley");

// Pobieramy listę autorów
console.log(bookshelf.getAuthors());  // Oczekiwany wynik: ["Mike Wazowski", "Bernard Cornwell", "Robert Sheckley"]

//Metoda addAuthor() dodaje nowego autora do tablicy authors za pomocą this. W tym kontekście this odnosi się do obiektu bookshelf.
//Metoda getAuthors() zwraca aktualną listę autorów, również używając this w odniesieniu do obiektu bookshelf.