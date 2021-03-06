// logica componentei corabiei
// Declaram clasa "boat" cu crearea obiectelor clasei

class BOAT {
    // indicam prop de tip boat
    constructor (){
            this.left = randomCoord(); // px
            this.top = randomCoord(); // px
            this.dir = "n"
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
    }
    moveUp(){
        this.dir = "n"
        this.div.className = 'boat ' +  this.dir;
    }
    moveRight(){
        this.dir = "e"
        this.div.className = 'boat ' +  this.dir;
    }
    moveDown(){
        this.dir = "s"
        this.div.className = 'boat ' +  this.dir;
    }
 
}

