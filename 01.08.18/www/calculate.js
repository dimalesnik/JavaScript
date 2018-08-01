const KEY = 'dae535f7ee7dead6bca5dac7c6cf59c6';

const URL = 'https://samples.openweathermap.org/data/2.5/weather';  ////   ???????????
function calculate(){
 var adress_here = document.getElementById('sit').value;
 var adress = new XMLHttpRequest();
 adress.open("GET", 
                URL + '?q=' + adress_here + '&APPID=' + KEY);   //////??????????
 adress.onload = function () {
 var data = JSON.parse(adress.responseText);
 console.log(data);
 if( data.main[0].temp == 'OK' ){
 console.log(data.main[0].temp);
 document.getElementById('result').innerHTML = data.main[0].temp + + '<br>' + data.main[0].humidity;
 var result = {                
                sit: adress_here,
                temp: data.main[0].temp,
                time: data.main[0].temp,
            };
 localStorage.setItem('temper_' + new Date().getTime(), JSON.stringify(result));
        }

}
adress.send();
}