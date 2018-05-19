//1.
function multiply(...arguments){
    let i = 0,
        n = 1;
    if (!arguments.length) return new  Error('No arguments');
    if (typeof arguments[i] !== 'number') return new Error("Every argument should be a number");
    for ( i = 0; i < arguments.length; i++){
        n *= arguments[i];
    }
    return n;
}
let m = multiply('fer', 4);
console.log(m);

//3.
function reverseString(stringArg) {
    let emptyString = "",
        n = stringArg.length;

    for (; n > 0 ;) {
        emptyString += stringArg[--n];
    }
    return emptyString;
}
let str = reverseString( 'test' );
console.log( "test -> " + str );

//4.
function getCodrStringFromTexr(string) {
    let str = '',
        space = ' ';
    for (let i = 1; i <= string.length; i++) {
        str += string.charCodeAt(i-1) + space;
    }
        return str;
    }
let st = getCodrStringFromTexr("hello");
    console.log(st);


// editTask

function editTask(id, text) {
    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
    id = Number(id);
    if (typeof text !== 'string') return new Error('text is not a string');
    if (!text.length) return new Error('text empty');

    let todo;

    for (let i = 0; i < todos.length; i++ ) {
        if (todos[i].id === id) {
            todo = todos[i];
            todos[i].text = text;
            break;
        }
    }

    return todo || 'task not found'
}




