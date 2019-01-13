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
// Function

function add(){
	let sum = 0;
	for(let i = 0; i<arguments.length; i++)
		sum += arguments[i];
	return sum;
}
console.log(add(1));
console.log(add(2,5));
console.log(add(3,5,7,1,2));

////
// ARRAY

var tab1 = [1,2,3,4];

// Wybieranie elementu
console.log(tab1[0]);

// Długość tablicy
console.log(tab1.length);

// Dodawanie na koniec tablicy
console.log(tab1.push(5, 6));

// Usuwanie ostatniego elementu i zwracenie go   
console.log(tab1.pop());

// Dodawanie na początku tablicy
console.log(tab1.unshift(0));

// Uwuwanie pierwszego elementu i zwracanie go
console.log(tab1.shift());

// Łączenie tablicy w string z separatorem
console.log(tab1.join(" - "));

// Odwracanie tablicy 
console.log(tab1.reverse());

// Sortowanie po wartościach rosnąco
console.log(tab1.sort());

//Łączenie dwóch tablic
var tab2 = [6, 7];
// [] + [] = string
console.log(tab1 + tab2);
console.log(tab1.concat(tab2));

// Wycinanie elementów (start, stop)
console.log(tab1.slice(1,4));

// Usuwanie / wstawianie elementów (start, ileUsunąć, noweELementy)
console.log(tab1.splice(4,1));
console.log(tab1);
console.log(tab1.splice(4,0,5,6));
console.log(tab1);

// Wyszukiwanie indexu podanego elementu
console.log(tab1.indexOf(3));

// forEach()
tab1.forEach( (el) => {
	console.log(el);
});

// Sprawdzam czy wszystkie elementy spełniają warunek
console.log(tab1.every((el)=>{ return el % 2 === 0 }));

// Sprawdzam czy dowolny element spełnia warunek
console.log(tab1.some((el)=>{ return el % 2 === 0 }));

// map tworzy nową tablice o długości poprzedniej i okreśnoną funkcja
console.log(tab1.map((el)=>{ return el * 2 }));

// Filtrowanie 
console.log(tab1.filter((el)=>{ return el % 2 === 0 }));

////
