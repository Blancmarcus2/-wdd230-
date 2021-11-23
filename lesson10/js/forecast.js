//Get the 5 days of the week
const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function CheckDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    } else {
        return day + d.getDay();
    }
}

for (i = 0; i < 5; i++) {
    document.getElementById(`day${[i]}`).textContent = forecast[i];
}

//Get the temperatures, icons and description for the next 5 days
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&exclude=minutely,hourly,alerts&units=imperial&appid=7ac96d32143254c1d79b1decba10b887';
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const listForecast = jsObject.list.filter((d) => d.dt_txt.includes("18:00:00"));
        for (let i = 0; i < 5; i++) {
            document.querySelector(`#temp${[i]}`).innerHTML = `${listForecast[i].main.temp.toFixed(1)} °F`;
            const images = `http://openweathermap.org/img/w/${listForecast[i].weather[0].icon}.png`;
            const description = listForecast[i].weather[0].description;
            document.querySelector(`#img${[i]}`).setAttribute("src", images);
            document.querySelector(`#img${[i]}`).setAttribute("alt", description);
        }
    });