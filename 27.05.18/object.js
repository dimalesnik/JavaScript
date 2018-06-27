
oop ->
Object Oriented Programming

// Object -> Atom
// Object -> box / container
    // variabile (Proprietati) ->  ce are???
    // methods (functions) ->  ce poate???

var name = "iPhone 11";
var price = 10000;
var year = 2019;


// 1) metoda literal 

var car = {
    // structure
    // a) proprietes
    brand: "BMW",
    model: "X8-4",
    price: 100000,
    year: 2020,

    // b) methods()
    beep: function(){
        alert("Beep!!!");
    }
};


console.log( car );
alert( car.brand );
car.beep();

    