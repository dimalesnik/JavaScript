// ES6 -> declaram o clasa
// 
class Person{

    constructor( name, year, ocupation, studii ){
        var current_year = new Date().getFullYear();
        this.name = name;
        this.lastname = "Eremia";
        this.age = current_year - year;
        this.ocupation = ocupation;
        this.studii = studii;
    }
    hello(){
        alert("Hi!!!")
    }
    who(){
        alert("My name is" + " " + this.name + " " + this.lastname + ", I am" + " " + this.age + " " + "years old.")
    }

}

// Cream obiecte de tip Person
var p1 = new Person("Ivan", 1989, "Somer", "Scoala primara" );
var p2 = new Person("Maria", 2000, "Tamplar", "Colegiu");
var p3 = new Person("Vasile", 1995, "Profesor", "Universitare" );

console.log(p1, p2, p3);


class Product{
    constructor( model, year, motor){
        var current_year = new Date().getFullYear();
        this.marca = "Toyota";
        this.model = model;
        this.age = current_year - year;
        this.motor = motor;

    }
    render(){
        document.write( '<h1>' + this.marca + " " + this.model + '<br>' + "Varsta:" + " " + this.age + " " + "ani" + this.motor + '</h1>' )
    }
}

var m1 = new Product("Corolla", 2006, "1364 CC" );
var m2 = new Product("Camry", 2011, "1998 CC" );
var m3 = new Product("Land Cruiser", 2015, "4199 CC");

m1.render();
m2.render();
m3.render();