////
// STRING
console.log("---- STRING ----");

let text1 = "Ala ma kota, a kot ma Ale."

// Typ zmiennej
console.log(typeof text1);

// Długość tekstu
console.log(text1.length);

// Znak na danej pozycji 
console.log(text1.charAt(0));
console.log(text1[0]);

// Kod znaku na danej pozycju
console.log(text1.charCodeAt(0));

// Małe / duże litery /pierwsza duża
console.log(text1.toLowerCase());
console.log(text1.toUpperCase());
console.log(text1.charAt(0).toUpperCase() + text1.slice(1));

// Sprawdzanie pozycji ciągu w tekscie -1 nie istnieje
console.log(text1.indexOf('kot'));

// Pobieranie kawałka tekstu (start, długość)
console.log(text1.substr(7,4));
// Pobieranie kawałka tekstu (start, stop) zaczyna od 7 a konczy przed 11
console.log(text1.substring(7,11));

// Przycinanie tektu jak substring
console.log(text1.slice(7,11));

// Tworzy tablicę z tekstu na podstawie separatora
console.log(text1.split(" "));

// Zamiana tekstu
console.log(text1.replace("Ala", "Ola"));

// Kodowanie tekstu do URI
console.log(encodeURIComponent(text1));

////
