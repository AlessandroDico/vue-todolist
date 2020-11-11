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
//trasformo le singole stringhe in array con un testo e una classe
//in questo modo è più facile selezionare i singoli elementi per 'postporli'
            { text : 'fare la spesa', changeState : 'blue' },
            { text : 'portare fuori il cane', changeState : 'blue' },
            { text : 'studiare', changeState : 'blue' },
            { text : 'allenarsi', changeState : 'blue' },
            { text : 'cucinare', changeState : 'blue' },
            { text : 'nerdare', changeState : 'blue' },
            /*
            'portare fuori il cane',
            'studiare',
            'allenarsi',
            'cucinare',
            'nerdare',
            */
        ],
        todoAdd: '',
        changeState : 'blue'
    },
    methods: {
        pushInArray() {
            this.todoList.push({ text : this.todoAdd, changeState : 'red'});
            this.todoAdd = '';
        },
        deleteTodo(index) {
            this.todoList.splice(index, 1);
// uso la funzione splice() per rimuovere un elemento
//il valore 1 serve per rimuovere un elemento alla volta... se aumento il valore, allo scatenarsi della funzione(in questo caso con il click) mi toglie tanti elementi quandi il valore del numero (se parto dall'alto)
        },
        
        /*
        //funzione alternativa per rimuovere un item
        deleteTodo(index) {
            this.$delete(this.todoList, index);
        }
        */

        postponedItem(item) {
            // console.log(item);

            if (item.changeState == 'blue') {
                item.changeState = 'red';
            } else {
                item.changeState = 'blue';
            }
        },

    },
})

// console.log('hello');
