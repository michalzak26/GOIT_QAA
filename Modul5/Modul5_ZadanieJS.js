// Funkcja do podwajania liczb w tablicy
const podwojoneLiczby = (liczby) => 
{
    const podwojenie = liczby.map(liczba => liczba * 2);
    return podwojenie;
}
  
  // Przykład
  const liczby = [1, 2, 3, 4, 5];
  console.log("Oryginalna tablica liczb:", liczby);
  const podwojenie = podwojoneLiczby(liczby);
  console.log("Tablica liczb podwojonych:", podwojenie);


  // Funkcja do pobierania imion studentów z tablicy obiektów
const getStudentNames = (studenci) => 
{
  const imiona = studenci.map(student => student.imie);
  return imiona;
}

// Przykład
const studenci = 
[
  { id: 1, imie: 'Maciej', nazwisko: 'Mysz', semestr: '3' },
  { id: 2, imie: 'Jan', nazwisko: 'Kowalski', semestr: '1' },
  { id: 3, imie: 'Artur', nazwisko: 'Radecki', semestr: '6' }
];
console.log("Oryginalna tablica studentow:", studenci);
const imiona = getStudentNames(studenci);
console.log("Tablica imion studentow:", imiona);
