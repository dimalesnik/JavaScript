// clasa care determina cum se vor comporta componentele de tip "avion"
class PlaneIcon{
    constructor( size, direction ){
        this.size = size;
        this.direction = direction;
        this.y = parseInt( Math.random() * 650 )+"px";
        this.x = parseInt( Math.random() * 1500 )+"px";
    }
    render(){
        if (this.direction=="right") {
            document.write('<img style="top:'+this.y+';left:'+this.x+'" src="plane-'+this.size+'.png" />'); 
        }
        if (this.direction=="left") {
            document.write('<img style="top:'+this.y+';left:'+this.x+'" class="reflected" src="plane-'+this.size+'.png" />'); 
        }
    }
}

//// cream obiecte de tip "PlaneIcon"
//var p1 = new PlaneIcon("big", "left");
//p1.render();
//console.log( p1 );


////parseInt( Math.random() * 500 )