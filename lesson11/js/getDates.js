// use toLocalDateString method of a date object
const currentdate = document.getElementById("currentdate");
currentdate.textContent = new Date().getFullYear();

const options = { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

document.querySelector("#copyrightyear").textContent = new Date().getFullYear();
document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-UK", options);