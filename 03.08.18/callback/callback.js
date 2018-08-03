// first - reactie la "click"
document.getElementById('btn').onclick = function(){first(second)};

// lant de apel
function first(callback){
    var data;
    //simulam intarzierea datelor
    setTimeout(function(){
        data = 1000;
        callback(data); // apel direct
    }, 1000);// vin de departe
    console.log("--------------------------")
    console.log("Executing 1");
}

function second(data){
    console.log("Executing 2");
    third(data);
}

function third(data){
    console.log("Executing 3");
    console.log("Datele " + data);
}