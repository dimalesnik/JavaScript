for( var n = 1; n <= 50; n++){
    if (n%2==0) {
        var p = new PlaneIcon("small","left");
    }else if (n%2==1) {
        var p = new PlaneIcon("medium","right");
    } else{
        alert( "try again");
    }
    //var p = new PlaneIcon("big","right");
    p.render();
}

class Box{
    constructor(){
        this.value = 100;
    }
    render(){
        document.write( this.value )
    }
}

var b = new Box();
setInterval( b.render, 1000 );
b.render();