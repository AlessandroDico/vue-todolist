/*
definire una lista di todo e stamparli in pagina in un elenco
predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo
al click su un item della lista, il todo viene rimosso
BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo
*/


// definire una lista di todo e stamparli in pagina
//fare un array di stringhe
//stamparli in pagina tramite v-for
var app = new Vue ({
    el: '#root',
    data: {
        todoList: [
            'fare la spesa',
            'portare fuori il cane',
            'studiare',
            'allenarsi',
            'cucinare',
            'nerdare',
        ],
    },
    methods: {

    },
})

// console.log('hello');