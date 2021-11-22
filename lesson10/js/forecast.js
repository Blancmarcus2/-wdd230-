fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
      console.log(jsObject);

      const six = jsObject.list.filter(x => x.dt_text.includes('18:00:00'));
      
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let day = 0;
      six.forEach(forecast => {
         let thedate = new Date(forecast.dt_txt);
         document.querySelector(`#dayofweek${day + 1}`).textContent = weekdays[thedate.getDay()];
         document.querySelector(`#forecast${day + 1}`).textContent = forecast.main.temp;
         day++;
    });
}); 