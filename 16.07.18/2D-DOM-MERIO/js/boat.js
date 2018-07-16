// In acest js se va afla logica ce corespunde deplasarii corabiei //
// Declaram clasa "Boat", din aceasta clasa vom crea obiecte, ele toate vor avea logica asemanatoare //
class Boat{
    // Aici indicam proprietatile de tip "Boat"
    constructor(){
        this.left = randomCoord(); // px
        this.top = randomCoord(); // px
        this.dir = 'n';
    }
    // Functii pentru toate corabiile
    render(){
        var map = document.getElementById('map');
        this.div = document.createElement('div');
        this.div.className = 'boat ' + this.dir;
        this.div.style.left = this.left + 'px';
        this.div.style.top = this.top + 'px';
            map.appendChild(this.div);
    }
    moveLeft(){
        this.dir = 'w';
        this.div.className = 'boat ' + this.dir;
    }

    moveUp(){
        this.dir = 'n';
        this.div.className = 'boat ' + this.dir;
    }

    moveRight(){
        this.dir = 'e';
        this.div.className = 'boat ' + this.dir;
    }

    moveDown(){
        this.dir = 's';
        this.div.className = 'boat ' + this.dir;
    }
    
}

