/*

    1) Scrivere un programma che stampi in console i numeri da 1 a 100;

    MA:

        2) Per i multipli di 3 deve stampare 'Fizz' al posto del numero;
        3) Per i multipli di 5 deve stampare 'Buzz' al posto del numero;
        4) Per i multipli sia di 3 che di 5 deve stampare 'FizzBuzz' al posto del numero.

*/

// Creo una Variabile per i numeri

let i = 1;
console.log('i', i, typeof i);

// 1) Scrivere un programma che stampi in console i numeri da 1 a 100;

for (let = 0; i <= 100; i++) {

    // 4) Per i multipli sia di 3 che di 5 deve stampare 'FizzBuzz' al posto del numero.

    if ((i % 3 == 0 && i % 5 == 0)) {
        console.log('FizzBuzz', i, typeof i);
    }

    // 2) Per i multipli di 3 deve stampare 'Fizz' al posto del numero;

    else if (i % 3 == 0 ) {
        console.log('Fizz', i, typeof i);
    }

    // 3) Per i multipli di 5 deve stampare 'Buzz' al posto del numero;

    else if (i % 5 == 0) {
        console.log('Buzz', i, typeof i);
    }

    // ALTRIMENTI stampa semplicemente i

    else {
        console.log('i', i, typeof i);
    }

};