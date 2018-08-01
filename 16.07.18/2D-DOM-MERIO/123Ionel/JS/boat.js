// logica componentei corabiei
// Declaram clasa "boat" cu crearea obiectelor clasei

class BOAT {
    // indicam prop de tip boat
    constructor (){
            this.left   = randomCoord(); // px
            this.top    = randomCoord(); // px
            this.dir    = "n"
            this.health = 100; // HP
            this.barrels    = []; //
    }
    // functiile pentru corabii
    render (){
        var map = document.getElementById('map') //cautam harta
        this.div = document.createElement('div')     // cream elementul div 
        this.div.className = 'boat ' + this.dir;            // adugam clasele // this. - universializeaza utilizarea variabilelor 
        this.div.style.left = this.left +'px';
        this.div.style.top = this.top +'px'
        map.appendChild(this.div);
    }
    moveLeft(){
        this.dir = "w"
        this.div.className = 'boat ' +  this.dir;
        if(this.left>=10){
            this.left-=10;
            this.div.style.left=this.left +'px';}
    }
    moveUp(){
        this.dir = "n"
        this.div.className = 'boat ' +  this.dir;
        if(this.top>=10){
            this.top-=10;
            this.div.style.top=this.top +'px';}
    }
    moveRight(){
        this.dir = "e"
        this.div.className = 'boat ' +  this.dir;
        if(this.left<502){
            this.left+=10;
            this.div.style.left=this.left +'px';}
    }
    moveDown(){
        this.dir = "s"
        this.div.className = 'boat ' +  this.dir;
        if(this.top<510){
            this.top+=10;
            this.div.style.top=this.top +'px';}
    }
    // Functie ajutatoare, calculeaza distanta
    // de la aceasta corabie pana la alt obiect
    distance(object){
        var a = this.left + 64 - (object.left + 16);
        var b = this.top + 64 - (object.top + 16);
        var d = Math.sqrt( a*a + b*b );
        return d;
    }
}

