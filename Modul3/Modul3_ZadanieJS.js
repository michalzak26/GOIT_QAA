//Zadanie 1
console.log("Zadanie1");

const fruits = ["Jabłko", "Banan", "Pomarańcza", "Arbuz"];

console.log(fruits);

//Zadanie 2 
console.log("Zadanie2");

const numbers = [36, 2, 11, 8, 1, 4, 41, 6, 15]; 
const user_number = 5; 

numbers.sort((a, b) => a - b);
 
console.log(numbers);

for (let i = 0; i < numbers.length; i += 1) 
{ 
    if (numbers[i] > user_number) 
  
    console.log(`Liczba większa niż ${user_number} to: ${numbers[i]}`);
}

