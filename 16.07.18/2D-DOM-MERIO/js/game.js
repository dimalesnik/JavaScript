// Fisierul principal

// test
var b = new Boat();
b.render();
console.log( b );


// Navigarea
function action(){
    if(event.keyCode == 37){// left
        b.moveLeft();
    }
    if(event.keyCode == 38){// up
        b.moveUp();
    }
    if(event.keyCode == 39){// right
        b.moveRight();
    }
    if(event.keyCode == 40){// down
        b.moveDown();
    }
}