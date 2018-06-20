function hi() {
    console.log("Salut!!!");
}

// apelam functia "hi"
hi();
hi();
hi();

function bye(){
    console.log("Hai, davai!!!");
}

var ora = prompt("Cat este ceasul???");
if( ora <= 12){
hi();
}else{
bye();
}