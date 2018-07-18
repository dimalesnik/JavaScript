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
 
    // Explozie
    explode(){
        this.div.style.backgroundImage = 'url(ICONS/explosion.png)';
        this.div.style.backgroundSize = '128px';
        var div = this.div;
        var y = 32;
        setInterval(function(){
            div.style.backgroundPosition = '0px -'+y+'px';
            div.style.transform =   'translateX('+parseInt(Math.random()*10)+'px)' + 
                                    ' translateY('+parseInt(Math.random()*10)+'px)';
            y+=32;
            if(y>400){
                div.parentElement.removeChild(div);
            }
        },100);
    }

}