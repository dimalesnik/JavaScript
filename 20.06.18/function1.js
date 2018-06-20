function hi( name ) {
    if( name = undefined){
console.log("Salut!!!");
    }else{
console.log("Salut " + name + " !!!");
    }
}
    console.log("Salut " + name + " !!! ");
}

function bye(){
    console.log("Hai, davai!!!");
}

var ora = prompt("Cat este ceasul???");
if( ora <= 12){
hi();
}else{
bye();
}


function bye( name ){
    if ( name == undefined ) {
        console.log("Hai noroc");
    }else{
        console.log("Hai noroc " + name + " !!!");
    }
    
}

bye(Ion);

///////////////////////// alt exemplu //////////////////////////

function mult( a, b ){
    if ( b == undefined) {
        alert("Valoarea nu a fost trimisa!!");
    }else{
        var result = a * b;
        alert( a + " inmultit la " + b + " = " + result);
    }
    
}
mult( 10, 20 );
mult();

//////// sau asa ////////


function mult( a, b ) {
    if ( a != undefined && b != undefined ) {
        var result = a * b;
        alert( a + " inmultit la " + b + " = " + result);
    }else{
        alert("Date introduse incorect!");
    }
}
mult( 10, 20 );
mult();


///////////// alt exemplu //////////////


function f() {
    
}