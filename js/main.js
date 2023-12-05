/*

    1) Scrivere un programma che stampi in console i numeri da 1 a 100;

    MA:

        2) Per i multipli di 3 deve stampare 'Fizz' al posto del numero;
        3) Per i multipli di 5 deve stampare 'Buzz' al posto del numero;
        4) Per i multipli sia di 3 che di 5 deve stampare 'FizzBuzz' al posto del numero.

*/

// Prendo il contenitore dall'HTML dove voglio inserire i miei elementi

const row = document.querySelector('.row');
console.log('row', row, typeof row);

// Prendo il body dall'HTML per aggiungere dello stile

const body = document.querySelector('body');
body.classList.add('bg-dark');

//  Prendo il titolo dall'HTML per aggiungere dello stile

const title = document.querySelector('h1');
title.classList.add('text-center', 'text-warning');


// 1) Scrivere un programma che stampi in console i numeri da 1 a 100;

for (let i = 1; i <= 100; i++) {

    // Dichiaro una variabile che mi crei un elemento all'interno dell'HTML
    
    const col = document.createElement('div');
    console.log('col', col, typeof col);

    // Aggiungo all'elemento una classe Bootstrap

    col.classList.add('col');

    // Creo all'interno dell'elemento un piccolo contenitore per i numeri

    const card = document.createElement('div');

    // Prendo il piccolo contenitore e gli aggiungo dello stile

    card.classList.add('square', 'text-white','text-center', 'align-middle', 'm-5');

    // "Appendo" il contenitore all'elemento

    col.append(card);

    // "Appendo" il mio nuovo elemento al contenitore principale

    row.append(col);


    // 4) Per i multipli sia di 3 che di 5 deve stampare 'FizzBuzz' al posto del numero.

    if ((i % 3 == 0 && i % 5 == 0)) {
        
        // "Appendo" la stampa al piccolo contenitore

        card.append('FizzBuzz');

        // Aggiunto dello stile al piccolo contenitore a seconda della condizione

        card.classList.add('bg-warning', 'bg-gradient')
        console.log('FizzBuzz', i, typeof i);
    }

    // 2) Per i multipli di 3 deve stampare 'Fizz' al posto del numero;

    else if (i % 3 == 0 ) {

        // "Appendo" la stampa al piccolo contenitore

        card.append('Fizz');

        // Aggiunto dello stile al piccolo contenitore a seconda della condizione
        
        card.classList.add('bg-primary', 'bg-gradient')
        console.log('Fizz', i, typeof i);
    }

    // 3) Per i multipli di 5 deve stampare 'Buzz' al posto del numero;

    else if (i % 5 == 0) {

        // "Appendo" la stampa al piccolo contenitore

        card.append('Buzz');

        // Aggiunto dello stile al piccolo contenitore a seconda della condizione
        
        card.classList.add('bg-success', 'bg-gradient')
        console.log('Buzz', i, typeof i);
    }

    // ALTRIMENTI stampa semplicemente i

    else {

        // "Appendo" la stampa al piccolo contenitore

        card.append(i);

        // Aggiunto dello stile al piccolo contenitore a seconda della condizione
        
        card.classList.add('bg-secondary', 'bg-gradient')
        console.log('i', i, typeof i);
    }

};

