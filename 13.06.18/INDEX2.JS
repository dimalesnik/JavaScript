// adaptivitate a paginii
// magic <<< detecteaza dimenziunile
var w = 1200;
var h = 800; 

// if/else -> portret,album
var w = prompt ("Care este latimea ecranului?")
if( w > h){
    alert("orizontal")
}else{
    alert("vertical")
}

// w mobile |400| tablet |800| pc

var w = 1200;
if( w > 800 ){
    alert("PC");
}else{
    if( w >400){
        alert("tablet");
    }else{
alert("mobile");
    }
}