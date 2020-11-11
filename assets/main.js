/*
definire una lista di todo e stamparli in pagina in un elenco
predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo
al click su un item della lista, il todo viene rimosso
BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo
*/

//1
// definire una lista di todo e stamparli in pagina
//fare un array di stringhe
//stamparli in pagina tramite v-for

//2
//predisporre un input testuale per aggiungere un nuovo todo
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
        todoAdd: '',
    },
    methods: {
        pushInArray() {
            this.todoList.push(this.todoAdd);
            this.todoAdd = '';
        },
        deleteTodo(index) {
            this.todoList.splice(index, 1);
// uso la funzione splice() per rimuovere un elemento
//il valore 1 serve per rimuovere un elemento alla volta... se aumento il valore, allo scatenarsi della funzione(in questo caso con il click) mi toglie tanti elementi quandi il valore del numero (se parto dall'alto)
}
    },
})

// console.log('hello');
