function createTank(){ // creaza un div cu classa Tank si il plaseaza in interiorul div'ului cu classa road
    var tank = document.createElement('div');   // <div></div>
        tank.className = 'tank'                 // <div class="tank"></div>
    var road = document.getElementById('road');
        road.appendChild( tank );
        return tank;
}

var tank = createTank();
var left = 0;

function createTree(){
    var tree = document.createElement('div');
        tree.className = 'tree'
    var road = document.getElementById('road');
        road.appendChild( tree );
        return tree;
}

var tree = createTree();

function moveTank(){ // event < capturam
    console.log( event.keyCode );
    if( event.keyCode == 37 ){
        // alert('move left')
        left--
        tank.style.left = left + 'px';
        tank.className='tank left';
    }
    if( event.keyCode == 39 ){
        // alert('move right')
        left++;
        tank.style.left = left + 'px';
        tank.className='tank right';
    }
}

function whereIsTheTank(){
    if(left > window.innerWidth/2){
        alert('right side')
    }else{
        alert('left side')
    }
}