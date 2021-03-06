const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7ac96d32143254c1d79b1decba10b887`;

fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {
       console.log(jsObject);
       
       document.querySelector("#currentweather").textContent = jsObject.weather[0].main;
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
