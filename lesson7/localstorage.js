// determine days between stored date and visit date ... today
// determine todays date
// const millisecondsToDays = 8640000; // divide the difference between dates in milli
// Last visit ... stored in localStorage
// const lastVisit = localStorage.getItem('lastvisit');
// determine number of days (lastVisit - Date.now() / millisecondsToDays)  .toFixed(0)
// display to wherever I want to
// need update the strored-----localStorage.setItem('lastvisit', Date.now());

const todaysDate = new Date();
const millis = 8640000;
const prevDate = new Date(parseInt(localStorage.getItem('lastVisit')));

daysBetweenVisits = Math.floor((todaysDate - prevDate) / millis);

let messageDays;
if (daysBetweenVisits >= 1) {
    messageDays = `We are happy to see you back. It has been ${daysBetweenVisits} day(s) since you visited us.`;
}
else {
    messageDays = "Welcome to our gallery 😊! Enjoy your visit."
}

document.getElementById("days").innerHTML = messageDays;

localStorage.setItem('lastVisit', +todaysDate);