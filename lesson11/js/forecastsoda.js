// Weather API
const cityID = '5607916'
const key = '7ac96d32143254c1d79b1decba10b887'
const units = 'imperial'
const cnt = 5
const currentWeather = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}&units=${units}`
const fiveDay = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${key}&units=${units}`
const imagesrc = 'https://openweathermap.org/img/w/'

// Make a request to current weather api
fetch(currentWeather).then(response => response.json())
    .then(data => summary(data));

// Make a request to forecast api
fetch(fiveDay).then(response => response.json())
    .then(data => forecast(data))
// 5 day forecast function.
function forecast(data) {
    const forecast_list = data.list
    const forecast_div = document.getElementById("forecast")
    forecast_list.forEach(day => {
        if (day.dt_txt.substring(11, ) == "18:00:00") {
            // fix date format
            let dateWrong = day.dt_txt
            // Replace '-' with '/'
            let dateRight = dateWrong.replace(/-/g, "/")
            // Create article
            article = document.createElement("article")
            // Create header
            header = document.createElement("header")
            // Create heading
            heading = document.createElement("h3")
            heading.textContent = new Date(dateRight).toLocaleDateString('en-us', {
                weekday: "short"
            })
            // Create div .forecast-content
            div = document.createElement("div")
            div.classList.add("forecast-content")
            // Create img
            img = document.createElement("img")
            img.src = `${imagesrc}${day.weather[0].icon}.png`
            img.alt = "Forecast weather icon"
            // Create p
            p = document.createElement("p")
            p.innerHTML = `High: ${Math.round(day.main.temp_max)} &#8457;`
            // Append img and p to div
            div.append(img, p)
            // Append heading to header
            header.append(heading)
            // Append div and header to article
            article.append(header, div)
            // Append article to #forecast
            forecast_div.append(article)
        }
    })
}


// //Get the temperatures, icons and description for the next 5 days
// var forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&exclude=minutely,hourly,alerts&units=imperial&appid=7ac96d32143254c1d79b1decba10b887`;