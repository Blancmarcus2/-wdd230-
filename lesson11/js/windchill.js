function calculateWindChillFactor(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75)  *  windSpeed ^ 0.16;
  }

const temp = 50,
      windSpeed = 3.0;

document.getElementById('temperature').textContent = `${temp} ºF`;
document.getElementById('windspeed').textContent = `${windSpeed} mph`;
document.getElementById('windchill').textContent = `${calculateWindChillFactor(temp, windSpeed)} ºF`;

console.log(
  `The chill factor for temperature "${temp}" and wind speed "${windSpeed}" is "${calculateWindChillFactor(temp, windSpeed)}".`
);