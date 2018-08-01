// callback / closure


// closure -> function -> 

// timer 

setInterval(funct, interval );  // setezi timer'ul

setTimeout( function, interval);  // setezi timer'ul


clearInterval( id );  // anulezi timer'ul

clearTimeout( id );  // anulezi timer'ul


var n = 1;
function ticTac() {
console.log( n );
n++    
}
setInterval( ticTac, 1000); /// <<<< callback  /  closure




var n = 1;

setInterval( function () {
    console.log( n );
    n++    
    }, 1000); /// <<<< callback  /  closure
