var mobile = false;

function adapt(){
    if(window.innerWidth < 800 && !mobile ){
        // conectam mobile.css
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = "mobile.css";
        document.head.appendChild( link );
        mobile = true;
    }    
}
window.onresize = adapt;
window.onload = adapt;