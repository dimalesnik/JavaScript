function start(){
    fall();
    setTimeout (winkLeftEye, 1000 );
    setTimeout (rotate, 2000 );

}

function fall(){
    var logo = document.getElementById('logo');
        logo.setAttribute('class','animated bounceInDown');
}

function rotate(){
    var logo = document.getElementById('logo');
        logo.setAttribute('class','');
        logo.setAttribute('class','animated-slow rotateOutUpRight');
}

function winkLeftEye(){
    setInterval(function(){
        var eye_left = document.getElementById('eye-left');
        if(eye_left.getAttribute('fill')=='#FFFFFF'){
            eye_left.setAttribute('fill','red'); 
        }else{
            eye_left.setAttribute('fill','#FFFFFF')
        }
    },50);
}
start();