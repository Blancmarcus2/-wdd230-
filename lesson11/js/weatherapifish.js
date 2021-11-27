//* Get data from BYU-I JSON and create functions to write the data
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townEvents = request.response;
    townFishHaven(townEvents);
}
//* Function to write Fish Haven data onto page; loop through JSON to find town name, then write header and events in townEventsFish article
function townFishHaven(jsonObj) {
    var towns = jsonObj['towns']
    var i = 0;
    var name = towns[i].name;
    for (i = 0; i < towns.length; i++) {
        var name = towns[i].name;
        if (name == "Fish Haven") {
            var eventsString = towns[i].events.join(', ');
            document.getElementById("townEventsFishHaven").innerHTML = "<h2>Fish Haven Events</h2> " + eventsString;
        }
    }
}


const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=42.036781&lon=-111.395362&units=imperial&appid=7ac96d32143254c1d79b1decba10b887`;

fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {
       console.log(jsObject);
       
       document.querySelector("#currentweather").textContent = jsObject.weather[0].description;
       const temperature = jsObject.main.temp.toFixed(0);
       document.querySelector("#hightemperature").textContent = temperature;
       document.querySelector("#humid").textContent = jsObject.main.humidity.toFixed(0);
       const windspeed = jsObject.wind.speed.toFixed(0);
       document.querySelector("#windSpeed").textContent = windspeed;

        //* Calculate wind chill
        if (temperature <= 50 && windspeed > 3) {
            const windchill =
                35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
            document.querySelector("#windChill").textContent = windchill.toFixed(0);
        } else {
            const windChillDescriptor = "So Cold";
            document.querySelector("#windChill").textContent = windChillDescriptor;
        }
});
