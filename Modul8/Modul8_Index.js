//metoda JSON.parse()
const json = '{"name":"Mango","age":3,"isHappy":true}';

try {
  const parsedObject = JSON.parse(json);
  console.log(parsedObject);
} catch (error) {
  console.error("Error parsing JSON:", error);
}

//Obsługa błędów 
const invalidJson = '{"name": "Mango", "age": 3, "isHappy": true'; // Błąd: brak zamykającego nawiasu

try {
  const parsedObject = JSON.parse(invalidJson);
  console.log(parsedObject);
} catch (error) {
  console.error("Wystąpił błąd podczas parsowania JSON:");
  console.error("Nazwa błędu:", error.name);
  console.error("Komunikat błędu:", error.message);
}
