// static <> dynamic
// inheritance 
// - polymorphism
// Array, String, Date

// OOP ---> Hierarchy

// Pentru a utiliza valori
String -> "text"
Array -> [1,2,3]
Number -> 1000
Boolean -> true

NaN, undefined, null


clase -> Obiecte (dinamic)
clase -> metode/propeietati (static)


    var prices = [ 150, 350, 280, 300, 450 ];
                // 0,   1,  2 - index
                
    for(var i=0;i<=4;i++){
        if (i>=200 && i<=400){
            document.write( prices[i] + '<br>' );
        }
        document.write( prices[i] + '<br>' );
    }

    for(var i=4;i>=0;i--){
        document.write( prices[i] + '<br>' );