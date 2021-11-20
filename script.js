let button=document.getElementById("searchbutton");
let city=document.getElementById("countryinput");
const apikey="96a5f06bcd4685aaba65e1942ccaef08";
let temp=document.getElementById("temp");
let humidity=document.getElementById("humidity");
let weather=document.getElementById("weather");
let windspeed=document.getElementById("windspeed");
let resultcity=document.getElementById("city");
let background=document.getElementsByClassName("maincontainer")[0];
let body=document.getElementById("body");


button.addEventListener("click",function(params) {
    const apilink=`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}`;

   
    fetch(apilink)
    .then(response => response.json())
    .then(function checkweather(data) {
        weatherdata= data;    
        convertedtemp= Math.floor(weatherdata.main.temp)  - 273  ;
        temp.innerHTML=convertedtemp + "C";
        humidity.innerText=weatherdata.main.humidity;
        weather.innerText=weatherdata.weather[0].description;
        windspeed.innerText=weatherdata.wind.speed;
        resultcity.innerText=city.value;
       
        if (convertedtemp<10) {
            background.style.backgroundImage="url(snow.jpg)";
            body.style.backgroundImage="url(snow.jpg)";
        }
        if (convertedtemp<15) {
            background.style.backgroundImage="url(snow.jpg)";
            body.style.backgroundImage="url(snow.jpg)";
        }
        if (convertedtemp>23) {
            background.style.backgroundImage="url(amid.jpg)";
            body.style.backgroundImage="url(amid.jpg)";
        }
        if (convertedtemp>30) {
            background.style.backgroundImage="url(sunny.jpg)";
            body.style.backgroundImage="url(sunny.jpg)";
        }
       
        
    });
    
}
) 