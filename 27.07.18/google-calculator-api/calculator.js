const KEY = 'AIzaSyBfVjiBzjD6PIYctMU4lpavn7dWGXUTo1s';

const URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';

// var address_from = 'London';
// var address_to   = 'Chisinau';

function calculate(){

    var address_from = document.getElementById("from").value
    var address_to   = document.getElementById("to").value

    var xhr = new XMLHttpRequest();
        xhr.open( 
            "GET", 
            URL + '?origins=' + address_from 
                + '&destinations=' + address_to 
                + '&key=' + KEY
            );
            xhr.onload=function(){
                var data = JSON.parse(xhr.responseText);
                if(data.rows[0].elements[0].status =="OK"){
                    console.log( data.rows[0].elements[0].distance.text );
                    document.getElementById("result").innerHTML = data.rows[0].elements[0].distance.text;
                    console.log( data.rows[0].elements[0].duration.text );
                    document.getElementById("timpul").innerHTML = data.rows[0].elements[0].duration.text;
                    var result = {
                        from: address_from,
                        to: address_to,
                        distance: data.rows[0].elements[0].distance.text,
                        time: data.rows[0].elements[0].duration.text
                    }
                    localStorage.setItem('dist_1' + new Date().getTime(), JSON.stringify(result))
                }else if(data.rows[0].elements[0].status == "NOT_FOUND"){
                    alert('Nu exista asa orase!!!' );
                }
                // console.log(data);
                // alert(data.rows[0].elements[0].status);
                // console.log( data.rows[0].elements[0].distance.text );
                
            }
            xhr.send();
}