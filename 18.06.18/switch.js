switch ( expression ) { // ===
    case value1:code;break;
    case value2:code;break;
    case value3:code;break;
    // alte cazuri
    default:code;break;
}



start;
while( expression ){
// code to repeat
}


/////////////
var day = prompt("A cata zi a saptamanii este azi?")
switch ( day ) { // ===
    case "1":alert("Mo");break;
    case "2":alert("Tu");break;
    case "3":alert("Wd");break;
    case "4":alert("Th");break;
    case "5":alert("Fr");break;
    case "6":alert("Sa");break;
    case "7":alert("Su");break;
    // alte cazuri
    default:alert("Valoare gresita!");break;
}



var pret_salata = 15;
var pret_omleta = 25;

var optiune; 

while( optiune!="x" ){
optiune = prompt("ALEGE\n1) Salata\n2) Omleta");
switch ( optiune ) { // ===
    case "1":alert("Ati ales Salata.");
    var portii = prompt("Cate portii?");
    alert("Trebuie sa achitati - " + portii * pret_salata + "lei");
    break;
    case "2":alert("Ati ales Omleta.");
    var portii = prompt("Cate portii?");
    alert("Trebuie sa achitati - " + portii * pret_omleta + "lei");
    break;
    // alte cazuri
    default:alert("Va multumim pentru alegerea facuta!");break;
}
}