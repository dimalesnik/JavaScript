// assignment
= <-----
var x - "value";

var x,y;
// ----->
1+2+3
// <-----
x = y = 10;

x++ // x = x + 1;

// compact
++ -----> increment
-- -----> decrement

var x = 10
x++;
alert(x);


+=
-=
*=
/=

// linear
var x = 10;
x+=2; // x = x + 2;
x*=2; // x = x * 2;
x/=8; // x = x / 8;
alert(x);


// bitwise operators
// bit <<< 
    & -> and
    | -> or
    ~ -> not
    ^ -> xor

    >>,<<,>>> -> shift


    // 1) directie   -----> , <-----
    // 2) precedente

    // adaptive(flow control) ->
        // branching -> 
            // -> if/else, ?:
            // -> switch/case   + break/default
        // looping
            // -> while
            // -> for
            // -> do while
            //  + break/continue


if( expression ){
    // blocul A
} else {
    //blocul B
}
                ----------> A (true)
----> conditie?
                ----------> B (false)



var nota = prompt("Nota ta generala?");
if( nota >= 7 ){
    alert("Bravo");
} else {
    alert("Compatimiri");
}

// ce este la dispozitie
var portii_bors = 3;
const PRET_BORS = 25.00;
var portii_salata = 1;
const PRET_SALATA = 25.00;
var portii_fasole = 5;
const PRET_FASOLE = 15.00;
var pahare_compot = 2;
const PRET_COMPOT = 10.00;
var pahare_apa = 10;
const PRET_APA = 5.00;
/////Meniu interactiv /////
if( confirm("Doriti bors?")){
var portii = prompt("Cate?");
if( portii_bors >= portii){
    alert("OK, luati - " + portii + " portii");
}else{
    alert("Nu sunt portii destule!")
}
}else{
alert("Bine!");
}
if( confirm("Doriti salata?")){
    var portii = prompt("Cate?");
    if( portii_salata >= portii){
        alert("OK, luati - " + portii + " portii");
        alert( (+portii * PRET_SALATA + portii * PRET_BORS + "MDL");
    }else{
        alert("Nu sunt portii destule!")
    }
    }else{
    alert("Bine!");
    }