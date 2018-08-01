class MINE {
    // indicam prop de tip boat
    constructor (){
            this.left = randomCoord(); // px
            this.top = randomCoord(); // px
    }
    // functiile pentru corabii
    render (){
        var map = document.getElementById('map') //cautam harta
        this.div = document.createElement('div')     // cream elementul div 
        this.div.className = 'mine';            // adugam clasele // this. - universializeaza utilizarea variabilelor 
        this.div.style.left = this.left +'px';
        this.div.style.top = this.top +'px'
        map.appendChild(this.div);
    }
 
}