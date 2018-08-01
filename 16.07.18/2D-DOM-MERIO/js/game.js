// fisierul principal 

//test
var b = new BOAT ()
b.render()
console.log(b);


var g = new MINE ()
g.render()
console.log(g);

var d = new BARREL ()
d.render()
console.log(d);

// Navigarea 

function action(){
    if (event.keyCode==37){ // left
       b.moveLeft();
    }
    if (event.keyCode==38){ // top
        b.moveUp();
    }
    if (event.keyCode==39){ // right
        b.moveRight();
    }
    if (event.keyCode==40){ // down
        b.moveDown();
    }
}