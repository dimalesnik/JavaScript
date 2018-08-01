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

    if(b.distance(g) < 70 ){
        b.health-=20;
        g.explode();
    }
    if(b.distance(d) < 30 ){
        alert('Yea, deseara bem!!!');
    }
    console.log( b.distance(g) )
}

// Panel Logic
var panel = document.getElementById('panel');
function updatePanel(){
    panel.innerHTML = '';
var h1 = document.createElement('h1');
    h1.innerText = 'Boat';
    panel.appendChild( h1 );

var h3 = document.createElement('h3');
    h3.innerText = 'Health' + " " + b.health + " % ";
    panel.appendChild( h3 );

var h3 = document.createElement('h3');
    h3.innerText = 'Rum' + " " + b.barrels.length + " barrels ";
    panel.appendChild( h3 );
    b.barrels.length
}
setInterval( updatePanel, 500 );