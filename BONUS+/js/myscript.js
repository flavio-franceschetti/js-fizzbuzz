// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

const numberList = document.querySelector(".number-list");

//creo un ciclo che mi stampa i numeri da 0 a 100 in console
for (let i = 0; i <= 100; i++) {
  //creo l'elemento li
  const listItem = document.createElement("li");
  //creo la condizione che se il numero è multiplo di 5 e 3 viene stampato "FizzBuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    //assegno a list item fizzbuzz
    listItem.textContent = "FizzBuzz";
    //aggiungo la classe con il colore a questa condizione
    listItem.classList.add("fizzbuzz");
    //creo la condizione che se il numero è multiplo di 5 viene stampato "buzz"
  } else if (i % 5 === 0) {
    //assegno a list item buzz
    listItem.textContent = "Buzz";
    //aggiungo la classe con il colore a questa condizione
    listItem.classList.add("buzz");

    //creo la condizione che se il numero è multiplo di 3 viene stampato "fizz"
  } else if (i % 3 === 0) {
    //assegno a list item fizz
    listItem.textContent = "Fizz";
    //aggiungo la classe con il colore a questa condizione
    listItem.classList.add("fizz");

    // altrimenti viene stampato il numero normale
  } else {
    //assegno a list item "i"
    listItem.textContent = i;
  }
  //aggiungo i listItem alla numberList
  numberList.appendChild(listItem);
}
